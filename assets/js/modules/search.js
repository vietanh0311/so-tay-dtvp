// Tìm kiếm trên hỏi đáp và kịch bản, không phân biệt dấu.
import { norm, esc } from "./util.js";

export function initSearch({ faq, objections, renderQa, renderObj }) {
  const index = [];
  faq.forEach((g) => g.items.forEach((x) => index.push({ kind: "qa", x, hay: norm(`${x.q} ${x.a} ${x.k} ${g.group}`) })));
  objections.forEach((o) => index.push({ kind: "obj", x: o, hay: norm(`${o.say} ${o.real} ${o.script}`) }));

  const input = document.getElementById("q");
  const box = document.getElementById("results");

  const run = () => {
    const v = norm(input.value).trim();
    if (!v) { box.hidden = true; box.innerHTML = ""; return; }
    const words = v.split(/\s+/).filter(Boolean);
    const need = Math.max(1, Math.ceil(words.length * 0.6));
    const hits = index
      .map((it) => {
        let score = it.hay.includes(v) ? 5 : 0;
        words.forEach((w) => { if (it.hay.includes(w)) score += 1; });
        return { it, score };
      })
      .filter((r) => r.score >= need)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    box.hidden = false;
    if (!hits.length) {
      box.innerHTML = `<p class="count">Chưa có câu trả lời cho "${esc(input.value)}". Ghi câu hỏi ở cuối mục <a href="#hoi-dap">Hỏi đáp</a> rồi gửi team ACCESSTRADE.</p>`;
      return;
    }
    box.innerHTML = `<p class="count">${hits.length} kết quả</p>` +
      hits.map((h, i) => (h.it.kind === "qa" ? renderQa(h.it.x, i === 0, "s") : renderObj(h.it.x, "s"))).join("");
  };

  input.addEventListener("input", run);
  document.getElementById("quick").addEventListener("click", (e) => {
    const b = e.target.closest("[data-q]");
    if (!b) return;
    input.value = b.dataset.q;
    run();
    input.focus();
  });
}
