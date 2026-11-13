// Nút Copy: <button data-copy="id-cua-doan-van">. Có dự phòng khi trình duyệt chặn clipboard.
export function copyText(text, btn, sourceEl) {
  const label = btn.textContent;
  const done = (msg) => {
    btn.textContent = msg;
    btn.classList.add("is-done");
    setTimeout(() => { btn.textContent = label; btn.classList.remove("is-done"); }, 1600);
  };
  const fallback = () => {
    if (!sourceEl) return;
    if (sourceEl.select) sourceEl.select();
    else {
      const r = document.createRange();
      r.selectNodeContents(sourceEl);
      const s = getSelection();
      s.removeAllRanges();
      s.addRange(r);
    }
    done("Đã chọn, bấm giữ để copy");
  };
  try { navigator.clipboard.writeText(text).then(() => done("Đã copy"), fallback); } catch { fallback(); }
}

export function initCopyButtons() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-copy]");
    if (!btn) return;
    const el = document.getElementById(btn.dataset.copy);
    if (el) copyText(el.innerText, btn, el);
  });
}
