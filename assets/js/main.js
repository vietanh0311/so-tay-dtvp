import { CONFIG } from "./config.js";
import { $, $$, esc, vnd, store } from "./modules/util.js";
import { icon, hydrateIcons } from "./modules/icons.js";
import { initCopyButtons, copyText } from "./modules/copy.js";
import { initCalculator } from "./modules/calculator.js";
import { initSearch } from "./modules/search.js";

import { PRICING, COMMISSION, PLANS, WAITING, ELIGIBLE, BILL_CASE, HERO_STATS, COMPARE } from "../../data/product.js";
import { ONBOARDING, SALE_STEPS, PREP_MESSAGE, BUY_STEPS } from "../../data/sales.js";
import { OBJECTIONS, OBJECTION_TOPICS } from "../../data/objections.js";
import { FAQ, SOURCES } from "../../data/faq.js";
import { SAY_PAIRS, DONT_POST, ADS_RULES, CLAIM_STEPS, REJECT_REASONS, RECORD_STEPS, MATERIALS, KIT_IMAGES, SAMPLE_POSTS } from "../../data/rules.js";
import { hydrateMediaFallback } from "./modules/media.js";

let uid = 0;
const scriptBlock = (label, text, prefix = "sx") => {
  const id = `${prefix}${uid++}`;
  return `<div class="script"><div class="script__bar"><span>${esc(label)}</span><button class="btn btn--ghost" type="button" data-copy="${id}">Copy</button></div><p id="${id}">${esc(text)}</p></div>`;
};

/* ---------- config ---------- */
$("#cta-campaign").href = CONFIG.campaignUrl;
$("#customer-buy-link").href = CONFIG.customerBuyUrl;
const pill = $("#status-pill");
if (CONFIG.status) pill.textContent = `${CONFIG.status} · ${CONFIG.lastUpdated}`; else pill.remove();
$("#hotline").textContent = CONFIG.hotline;
$("#updated").textContent = `Cập nhật ${CONFIG.lastUpdated}`;
$("#ask-hint").textContent = `Gõ câu hỏi vào ô dưới đây, bấm Copy rồi gửi cho ${CONFIG.supportLabel}. Đội ngũ AT sẽ làm việc với MB Life và cập nhật câu trả lời lên sổ tay.`;

/* ---------- hero ---------- */
$("#bill").innerHTML = `
  <div class="bill" aria-label="Bảng kê minh họa">
    <div class="bill__head"><span class="tag tag--blue" style="width:fit-content">Bảng kê minh họa</span><b>${esc(BILL_CASE.title)}</b><small>${esc(BILL_CASE.meta)}</small></div>
    <table>
      ${BILL_CASE.rows.map((r) => `<tr class="${r.sub ? "sub" : ""}"><td>${esc(r.label)}</td><td>${r.value < 0 ? "−" : ""}${vnd(Math.abs(r.value) * 1e6)}</td></tr>`).join("")}
      <tr class="total"><td>Phần còn lại sau BHYT</td><td>${vnd(BILL_CASE.without * 1e6)}</td></tr>
    </table>
    <div class="bill__pay">
      <div><small>Không có Điểm tựa viện phí</small><b>${BILL_CASE.without} tr</b></div>
      <div><small>Đã mua bản nâng cao</small><b>${BILL_CASE.with}đ</b></div>
    </div>
    <p class="bill__note">${esc(BILL_CASE.note)} Nguồn: website MB Life.</p>
  </div>`;
$("#stats").innerHTML = HERO_STATS.map((s) => `<div class="stat"><span class="stat__icon">${icon(s.icon)}</span><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

/* ---------- compare ---------- */
$("#compare").innerHTML = `<tr><th>Tiêu chí</th><th>Bảo hiểm sức khỏe thông thường</th><th>Điểm Tựa Viện Phí</th></tr>` +
  COMPARE.rows.map((r) => `<tr><td>${esc(r.label)}</td><td>${esc(r.normal)}</td><td>${esc(r.dtvp)}</td></tr>`).join("");
$("#compare-note").textContent = COMPARE.note;

/* ---------- onboarding ---------- */
const done = new Set(store.get("dtvp-check", []));
$("#checklist").innerHTML = ONBOARDING.map((c) => `
  <li><label for="${c.id}"><input type="checkbox" id="${c.id}" ${done.has(c.id) ? "checked" : ""}><span>${esc(c.text)}${c.href ? ` <a href="${c.href}"${c.href.startsWith("http") ? ` target="_blank" rel="noopener"` : ""}>${c.linkLabel || "Xem"}</a>` : ""}</span></label></li>`).join("");
const boxes = $$("#checklist input");
const updateProg = () => {
  const n = boxes.filter((b) => b.checked).length;
  $("#prog").textContent = `Đã xong ${n}/${boxes.length}`;
  $("#prog-bar").style.width = `${(n / boxes.length) * 100}%`;
};
boxes.forEach((b) => b.addEventListener("change", () => { updateProg(); store.set("dtvp-check", boxes.filter((x) => x.checked).map((x) => x.id)); }));
updateProg();

/* ---------- product ---------- */
$("#plans").innerHTML = PLANS.map((p) => `
  <article class="plan ${p.id === "adv" ? "plan--adv" : ""}">
    ${p.badge ? `<span class="plan__badge">${esc(p.badge)}</span>` : ""}
    <h3>${esc(p.name)}</h3>
    <p class="plan__price">Từ <b>${vnd(p.from)}</b> đ/năm</p>
    <span class="tag tag--pink" style="width:fit-content">Hạn mức ${esc(p.limit)}</span>
    <ul class="dots">${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    <p class="plan__fit"><b>Hợp với:</b> ${esc(p.fit)}</p>
  </article>`).join("");

const ages = PRICING.filter((p) => !p.renewOnly);
let ageIdx = ages.findIndex((a) => a.age === "31-35");
const renderPricer = () => {
  $("#ages").innerHTML = ages.map((a, i) => `<button type="button" role="radio" aria-checked="${i === ageIdx}" data-i="${i}">${a.age}</button>`).join("");
  const a = ages[ageIdx];
  const box = (cls, name, fee) => `
    <div class="price-box ${cls}">
      <small>${name}</small>
      <b>${vnd(fee)}đ</b>
      <span>Hoa hồng ước tính <em>${vnd(fee * COMMISSION.min)}-${vnd(fee * COMMISSION.max)}đ</em></span>
    </div>`;
  $("#pricer-out").innerHTML = box("", "Tiêu chuẩn · tuổi " + a.age, a.std) + box("price-box--adv", "Nâng cao · tuổi " + a.age, a.adv);
};
$("#ages").addEventListener("click", (e) => { const b = e.target.closest("[data-i]"); if (!b) return; ageIdx = +b.dataset.i; renderPricer(); $(`#ages [data-i="${ageIdx}"]`).focus(); });
renderPricer();

$("#waits").innerHTML = WAITING.map((w) => `<div class="wait"><b>${w.days}</b><small>${w.unit}</small><span>${esc(w.label)}</span></div>`).join("");
$("#eligible").innerHTML = `
  <div class="card"><span class="tag tag--ok" style="width:fit-content">Mua được</span><ul class="dots dots--ok">${ELIGIBLE.yes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
  <div class="card"><span class="tag tag--warn" style="width:fit-content">Không chào</span><ul class="dots dots--no">${ELIGIBLE.no.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`;

/* ---------- sale flow ---------- */
let step = 0;
const renderFlow = () => {
  $("#flow-tabs").innerHTML = SALE_STEPS.map((s, i) => `<li><button type="button" role="tab" aria-selected="${i === step}" data-i="${i}">${esc(s.title)}</button></li>`).join("");
  const s = SALE_STEPS[step];
  $("#flow-panel").innerHTML = `
    <span class="tag tag--blue" style="width:fit-content">Bước ${step + 1}/${SALE_STEPS.length}</span>
    <h3>${esc(s.title)}</h3>
    <p class="muted">${esc(s.goal)}</p>
    ${scriptBlock(s.scriptLabel || "Câu mẫu", s.script, "flow")}
    <div style="display:flex;gap:8px;justify-content:space-between">
      <button class="btn btn--ghost" type="button" data-step="-1" ${step === 0 ? "hidden" : ""}>Bước trước</button>
      <button class="btn btn--ghost" type="button" data-step="1" ${step === SALE_STEPS.length - 1 ? "hidden" : ""} style="margin-left:auto">Bước tiếp</button>
    </div>`;
};
$("#flow-tabs").addEventListener("click", (e) => { const b = e.target.closest("[data-i]"); if (!b) return; step = +b.dataset.i; renderFlow(); });
$("#flow-panel").addEventListener("click", (e) => { const b = e.target.closest("[data-step]"); if (!b) return; step += +b.dataset.step; renderFlow(); });
renderFlow();

/* ---------- buy ---------- */
$("#prep").innerHTML = `<h3 class="card__title">Tin nhắn gửi khách trước khi bấm link</h3><p class="muted small">Bấm copy, chèn link bán của bạn vào dòng cuối cùng rồi gửi qua Zalo cho khách.</p>${scriptBlock("Tin nhắn chuẩn bị", PREP_MESSAGE, "prep")}`;
$("#buy-steps").innerHTML = BUY_STEPS.map((b) => `
  <li class="${b.hot ? "hot" : ""}">
    <span class="grp">${esc(b.group)}</span>
    <h4>${esc(b.title)}${b.hot ? '<span class="tag tag--pink">Hay bỏ dở</span>' : ""}</h4>
    <p>${esc(b.tip)}</p>
  </li>`).join("") + `<li><span class="grp">Xong</span><h4>Hợp đồng phát hành</h4><p>Đơn chính thức ghi nhận trên báo cáo ACCESSTRADE. Bạn nhắc khách cài đặt app MB Life Style để quản lý hợp đồng.</p></li>`;

/* ---------- objections ---------- */
const renderObj = (o, prefix = "o") => `
  <article class="obj">
    <p class="obj__say">"${esc(o.say)}"</p>
    <div class="obj__row"><small>Ý thật của khách</small><span>${esc(o.real)}</span></div>
    ${scriptBlock("Câu mẫu", o.script, prefix)}
    <div class="obj__row obj__row--no"><small>Không nói</small><span>"${esc(o.no)}"</span></div>
  </article>`;
let objTopic = OBJECTION_TOPICS[0];
const renderObjs = () => {
  $("#obj-filter").innerHTML = OBJECTION_TOPICS.map((t) => `<button class="chip" type="button" role="tab" aria-selected="${t === objTopic}" data-t="${t}">${t}</button>`).join("");
  $("#objections").innerHTML = OBJECTIONS.filter((o) => objTopic === OBJECTION_TOPICS[0] || o.topic === objTopic).map((o) => renderObj(o)).join("");
};
$("#obj-filter").addEventListener("click", (e) => { const b = e.target.closest("[data-t]"); if (!b) return; objTopic = b.dataset.t; renderObjs(); });
renderObjs();

/* ---------- faq ---------- */
const renderQa = (x, open = false, prefix = "") => {
  const s = SOURCES[x.src];
  return `<details class="qa" id="${prefix ? prefix + "-" : ""}q-${x.id}"${open ? " open" : ""}>
    <summary>${esc(x.q)}</summary>
    <div class="qa__body"><p>${esc(x.a)}</p><span class="tag tag--${s.tone}" style="width:fit-content">${s.label}</span></div>
  </details>`;
};
const groups = ["Tất cả", ...FAQ.map((g) => g.group)];
let faqGroup = groups[0];
const renderFaq = () => {
  $("#faq-filter").innerHTML = groups.map((g) => `<button class="chip" type="button" role="tab" aria-selected="${g === faqGroup}" data-g="${g}">${g}</button>`).join("");
  $("#faq").innerHTML = FAQ.filter((g) => faqGroup === groups[0] || g.group === faqGroup)
    .map((g) => `<div class="faq__group"><h3>${esc(g.group)}</h3>${g.items.map((x) => renderQa(x)).join("")}</div>`).join("");
};
$("#faq-filter").addEventListener("click", (e) => { const b = e.target.closest("[data-g]"); if (!b) return; faqGroup = b.dataset.g; renderFaq(); });
renderFaq();

$("#copy-newq").addEventListener("click", (e) => {
  const t = $("#newq");
  const v = t.value.trim();
  if (!v) { t.focus(); return; }
  copyText(`[Điểm Tựa Viện Phí] Câu hỏi từ khách: ${v}`, e.currentTarget, t);
});

/* ---------- claim, rules, commission ---------- */
$("#claim").innerHTML = CLAIM_STEPS.map((c) => `<li><h4>${esc(c.title)}</h4><p>${esc(c.text)}</p></li>`).join("");
$("#reject").innerHTML = `<tr><th>Lý do</th><th>Cụ thể</th></tr>` + REJECT_REASONS.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join("");
$("#pairs").innerHTML = SAY_PAIRS.map((p) => `<div class="pair"><div class="pair__ok"><small>Nên nói</small><span>${esc(p.ok)}</span></div><div class="pair__no"><small>Không nói</small><span>"${esc(p.no)}"</span></div></div>`).join("");
$("#dont-post").innerHTML = DONT_POST.map((x) => `<li>${esc(x)}</li>`).join("");
$("#ads-rules").innerHTML = ADS_RULES.map((x) => `<li>${esc(x)}</li>`).join("");
const ex = PRICING.find((p) => p.age === "31-35");
$("#comm-table").innerHTML = `<tr><th>Khách 31-35 tuổi</th><th class="r">Phí</th><th class="r">Hoa hồng</th></tr>` +
  [["Tiêu chuẩn", ex.std], ["Nâng cao", ex.adv]].map(([n, f]) => `<tr><td>${n}</td><td class="r">${vnd(f)}</td><td class="r">${vnd(f * COMMISSION.min)}-${vnd(f * COMMISSION.max)}</td></tr>`).join("");
$("#record").innerHTML = RECORD_STEPS.map((x) => `<li>${esc(x)}</li>`).join("");

/* ---------- materials ---------- */
$("#materials").innerHTML = MATERIALS.map((m) => `<a class="mat" href="${m.url}" target="_blank" rel="noopener"><span class="mat__icon">${icon(m.icon)}</span><span><b>${esc(m.title)}</b><small>${esc(m.meta)}</small></span></a>`).join("");
$("#kit-images").innerHTML = KIT_IMAGES.map((k) => `
  <div class="media-card">
    <div class="media-card__thumb"><img class="media-img" src="${k.src}" alt="${esc(k.title)}"></div>
    <b>${esc(k.title)}</b>
    <small>${esc(k.meta)}</small>
  </div>`).join("");
$("#posts").innerHTML = SAMPLE_POSTS.map((p) => `<div class="card">${scriptBlock(p.label, p.text, "post")}</div>`).join("");

/* ---------- video: ảnh bìa, bấm mới tải video thật (không autoplay sẵn) ---------- */
$("#product-video").addEventListener("click", (e) => {
  const card = e.currentTarget;
  if (card.dataset.playing) return;
  card.dataset.playing = "1";
  card.innerHTML = `<iframe src="${CONFIG.productVideoUrl}" allow="autoplay" allowfullscreen title="Video giới thiệu Điểm Tựa Viện Phí"></iframe>`;
});

/* ---------- init ---------- */
initCopyButtons();
initCalculator();
initSearch({ faq: FAQ, objections: OBJECTIONS, renderQa, renderObj });
hydrateIcons();
hydrateMediaFallback();
