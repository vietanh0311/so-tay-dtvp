import { CONFIG } from "./config.js";
import { $, $$, esc, vnd, store } from "./modules/util.js";
import { icon, hydrateIcons } from "./modules/icons.js";
import {
  QUESTIONS, FEE_TABLE, WELCOME, PRODUCT_INTRO, SECTION_LABEL,
  THANK_YOU, THANK_YOU_MINOR, ACTION_BUTTONS, FOOTER_NOTE,
} from "../../data/khao-sat-data.js";

const QUESTION_MAP = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));
const BASE_FLOW = ["welcome", ...QUESTIONS.map((q) => q.id).slice(0, 10), "product-intro", ...QUESTIONS.map((q) => q.id).slice(10), "thanks"];
// slice(0,10) = A1..B5 (10 câu), slice(10) = C1..D1 (12 câu). Chèn product-intro trước C1.

const DONE_KEY = "dtvp-khaosat-done";
const uid = () => (window.crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);

const session = uid();
const src = new URLSearchParams(location.search).get("src") || "";
const startedAt = new Date();
let answers = {};
let currentKey = "welcome";

/* ---------- luồng & rẽ nhánh ---------- */
function visibleFlow() {
  const flat = flatAnswers();
  if (flat.A1 === "Dưới 18") return ["welcome", "A1", "thanks-minor"];
  return BASE_FLOW.filter((key) => {
    const q = QUESTION_MAP[key];
    if (!q) return true;
    if (q.hideIf) return !q.hideIf(flat);
    return true;
  });
}
function flatAnswers() {
  const out = {};
  for (const q of QUESTIONS) {
    const v = answers[q.id];
    out[q.id] = Array.isArray(v) ? v.map((i) => q.options[i].label) : v != null ? (q.options ? q.options[v]?.label ?? v : v) : undefined;
  }
  return out;
}
function sectionOf(key) {
  if (key === "welcome") return null;
  if (key === "product-intro") return "C";
  if (key === "thanks" || key === "thanks-minor") return "end";
  return QUESTION_MAP[key]?.section;
}

/* ---------- progreso header ---------- */
function renderProgress() {
  const flow = visibleFlow();
  const box = $("#ks-progress");
  if (currentKey === "welcome") { box.classList.remove("is-on"); return; }
  box.classList.add("is-on");
  let pct;
  if (currentKey === "thanks" || currentKey === "thanks-minor") pct = 100;
  else {
    const countable = flow.filter((k) => k !== "welcome" && k !== "thanks" && k !== "thanks-minor");
    pct = Math.round(15 + (countable.indexOf(currentKey) / countable.length) * 85);
  }
  const sec = sectionOf(currentKey);
  $("#ks-progress-label").textContent = sec === "end" ? "Hoàn tất" : sec ? SECTION_LABEL[sec] : "";
  $("#ks-progress-pct").textContent = `${pct}%`;
  $("#ks-progress-fill").style.width = `${pct}%`;
}

/* ---------- điều hướng ---------- */
function goto(delta) {
  const flow = visibleFlow();
  const pos = flow.indexOf(currentKey);
  const next = flow[pos + delta];
  if (next == null) return;
  if (delta > 0) logSectionDone(currentKey, next);
  currentKey = next;
  render();
}
function logSectionDone(prevKey, nextKey) {
  const a = sectionOf(prevKey), b = sectionOf(nextKey);
  if (a && a !== b && a !== "end") logEvent(`xong_phan_${a}`);
}

/* ---------- validate ---------- */
function validateCurrent() {
  const q = QUESTION_MAP[currentKey];
  if (!q) return true;
  if (q.type === "phone") {
    if (answers.D1 === 0) { // "Có"
      const phone = (answers.D1_phone || "").replace(/\D/g, "");
      const ok = phone.length >= 9 && answers.D1_consent === true;
      return ok;
    }
    return true;
  }
  if (q.required === false) return true;
  const v = answers[q.id];
  if (q.type === "multi") return Array.isArray(v) && v.length > 0;
  return v != null && v !== "";
}

/* ---------- render chính ---------- */
function render() {
  renderProgress();
  window.scrollTo({ top: 0 });
  const card = $("#ks-card");
  const bottom = $("#ks-bottom");
  if (currentKey === "welcome") return renderWelcome(card, bottom);
  if (currentKey === "product-intro") return renderProductIntro(card, bottom);
  if (currentKey === "thanks") return renderThanks(card, bottom);
  if (currentKey === "thanks-minor") return renderThanksMinor(card, bottom);
  renderQuestion(QUESTION_MAP[currentKey], card, bottom);
}

function bottomNav({ back = true, cta = "Tiếp tục", onNext }) {
  const flow = visibleFlow();
  const atStart = flow.indexOf(currentKey) === 0;
  $("#ks-bottom").style.display = "flex";
  $("#ks-bottom").innerHTML = `
    ${back && !atStart ? `<button class="btn btn--ghost" type="button" id="ks-back" aria-label="Quay lại"><span style="display:inline-flex;transform:scaleX(-1)">${icon("arrow")}</span></button>` : ""}
    <button class="btn btn--pink" type="button" id="ks-next">${esc(cta)}</button>`;
  if (back && !atStart) $("#ks-back").addEventListener("click", () => goto(-1));
  $("#ks-next").addEventListener("click", onNext);
  hydrateIcons($("#ks-bottom"));
}

/* ---------- màn mở đầu ---------- */
function renderWelcome(card) {
  card.innerHTML = `
    <div class="ks-welcome">
      <span class="tag tag--blue" style="width:fit-content">${esc(WELCOME.chip)}</span>
      <div>
        <h1 class="card__title">${esc(WELCOME.title)}</h1>
        <p class="card__sub">${esc(WELCOME.subtitle)}</p>
      </div>
      <p class="muted">${esc(WELCOME.body)}</p>
      <ul class="dots">${WELCOME.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>`;
  bottomNav({ back: false, cta: WELCOME.cta, onNext: () => { logEvent("bat_dau"); goto(1); } });
}

/* ---------- khối giới thiệu sản phẩm (Phần C) ---------- */
function renderProductIntro(card) {
  const vid = CONFIG.surveyVideoYoutubeId;
  const selfVideo = CONFIG.surveyVideoUrl;
  card.innerHTML = `
    <p class="eyebrow">${esc(PRODUCT_INTRO.eyebrow)}</p>
    <h2 class="ks-q" style="font-size:20px">${esc(PRODUCT_INTRO.title)}</h2>
    <p class="muted small">${esc(PRODUCT_INTRO.lead)}</p>
    ${vid
      ? `<button class="ks-video" type="button" id="ks-play" aria-label="Xem video tóm tắt"><img src="https://i3.ytimg.com/vi/${esc(vid)}/hqdefault.jpg" alt="Video tóm tắt Điểm Tựa Viện Phí"><span class="ks-video__play">${icon("play")}</span></button>`
      : selfVideo
      ? `<video class="ks-video" src="${esc(selfVideo)}" ${CONFIG.surveyVideoPoster ? `poster="${esc(CONFIG.surveyVideoPoster)}"` : ""} controls playsinline preload="metadata" title="Video tóm tắt Điểm Tựa Viện Phí"></video>`
      : `<div class="ks-video" style="display:grid;place-items:center;color:var(--navy);gap:6px;text-align:center;padding:16px"><span data-icon="play" style="width:40px;height:40px;opacity:.5"></span><small class="muted small">Video tóm tắt đang chuẩn bị - đọc 4 ý bên dưới nhé</small></div>`}
    <div class="ks-points">
      <ul class="dots">${PRODUCT_INTRO.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>
    <p class="src">${esc(PRODUCT_INTRO.note)}</p>`;
  if (vid) $("#ks-play").addEventListener("click", (e) => {
    e.currentTarget.outerHTML = `<div class="ks-video"><iframe src="https://www.youtube.com/embed/${esc(vid)}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen title="Video tóm tắt"></iframe></div>`;
  });
  hydrateIcons(card);
  bottomNav({ cta: PRODUCT_INTRO.cta, onNext: () => goto(1) });
}

/* ---------- 1 câu hỏi ---------- */
function renderQuestion(q, card) {
  const selected = answers[q.id];
  let feeNote = "";
  const a1Label = flatAnswers().A1;
  if (q.feeFromA1 && FEE_TABLE[a1Label]) {
    const f = FEE_TABLE[a1Label];
    feeNote = `<div class="ks-gift-box" style="margin-top:12px"><b>Với tuổi của bạn:</b> ${vnd(f.std)}đ/năm (bản Tiêu chuẩn) hoặc ${vnd(f.adv)}đ/năm (bản Nâng cao).</div>`;
  }
  const qText = q.qIf ? (q.qIf(flatAnswers()) || q.q) : q.q;

  let body = "";
  if (q.type === "scale5") {
    body = `
      <div class="ks-scale">${[1, 2, 3, 4, 5].map((n) => `<button class="ks-scale__btn ${selected === n ? "is-selected" : ""}" type="button" data-n="${n}">${n}</button>`).join("")}</div>
      <div class="ks-scale__labels"><span>${esc(q.scaleMin)}</span><span>${esc(q.scaleMax)}</span></div>`;
  } else if (q.type === "phone") {
    body = `
      <div class="ks-opts">${q.options.map((o, i) => optionHtml(o, i, selected === i, "circle")).join("")}</div>
      <div class="ks-phone ${selected === 0 ? "" : "is-hidden"}" id="ks-phone-block">
        <input type="tel" inputmode="numeric" placeholder="Số Zalo của bạn" id="ks-phone-input" value="${esc(answers.D1_phone || "")}">
        <label class="ks-consent"><input type="checkbox" id="ks-consent" ${answers.D1_consent ? "checked" : ""}><span>${esc(q.consent)}</span></label>
      </div>`;
  } else {
    const isMulti = q.type === "multi";
    const sel = Array.isArray(selected) ? selected : [];
    const otherVal = answers[q.id + "__other"] || "";
    const lockedNow = isMulti && q.maxSelect && sel.length >= q.maxSelect;
    body = `<div class="ks-opts">${q.options.map((o, i) => optionHtml(o, i, isMulti ? sel.includes(i) : selected === i, isMulti ? "square" : "circle", otherVal, lockedNow && !sel.includes(i))).join("")}</div>`;
    if (isMulti && q.maxSelect) body += `<p class="ks-maxwarn ${lockedNow ? "is-on" : ""}" id="ks-maxwarn">Bạn đã chọn đủ ${q.maxSelect} đáp án. Chạm lại vào đáp án đã chọn nếu muốn đổi ý.</p>`;
  }

  card.innerHTML = `
    <p class="ks-q">${esc(qText)}</p>
    ${q.hint ? `<span class="ks-hint">${esc(q.hint)}</span>` : ""}
    ${feeNote}
    ${body}
    ${q.note ? `<p class="ks-note">${esc(q.note)}</p>` : ""}
    <p class="ks-error" id="ks-error">${esc(errorMessage(q))}</p>`;

  wireQuestion(q, card);
  const isLast = visibleFlow()[visibleFlow().length - 2] === q.id; // trước thanks
  bottomNav({ cta: isLast ? "Hoàn thành" : "Tiếp tục", onNext: () => onContinue(q) });
}

function errorMessage(q) {
  if (q.type === "phone") return "Vui lòng nhập số Zalo và tích đồng ý được liên hệ, hoặc chọn \"Chưa tiện\" để tiếp tục";
  if (q.type === "multi") return "Vui lòng chọn ít nhất 1 đáp án để tiếp tục";
  return "Vui lòng chọn 1 đáp án để tiếp tục";
}

function optionHtml(o, i, isSelected, shape, otherVal = "", isLocked = false) {
  return `
    <div class="ks-opt-wrap">
      <button class="ks-opt ${isSelected ? "is-selected" : ""} ${isLocked ? "is-locked" : ""}" type="button" data-shape="${shape}" data-i="${i}" role="${shape === "square" ? "checkbox" : "radio"}" aria-checked="${isSelected}" aria-disabled="${isLocked}">
        <span class="ks-opt__mark"></span><span>${esc(o.label)}</span>
      </button>
      ${o.other && isSelected ? `<input class="ks-opt__other" type="text" placeholder="Ghi cụ thể (không bắt buộc)" data-other-for="${i}" value="${esc(otherVal)}">` : ""}
    </div>`;
}

function wireQuestion(q, card) {
  $("#ks-error")?.classList.remove("is-on");

  if (q.type === "scale5") {
    $$(".ks-scale__btn", card).forEach((b) => b.addEventListener("click", () => {
      answers[q.id] = Number(b.dataset.n);
      goto(1);
    }));
    return;
  }

  if (q.type === "phone") {
    $$(".ks-opt", card).forEach((btn) => btn.addEventListener("click", () => {
      answers.D1 = Number(btn.dataset.i);
      render();
    }));
    const phoneInput = $("#ks-phone-input");
    phoneInput?.addEventListener("input", (e) => { answers.D1_phone = e.target.value; });
    $("#ks-consent")?.addEventListener("change", (e) => { answers.D1_consent = e.target.checked; });
    return;
  }

  if (q.type === "single") {
    $$(".ks-opt", card).forEach((btn) => btn.addEventListener("click", () => {
      const i = Number(btn.dataset.i);
      answers[q.id] = i;
      const opt = q.options[i];
      if (!opt.other) delete answers[q.id + "__other"];
      if (opt.other) { render(); return; }
      goto(1);
    }));
    $$(".ks-opt__other", card).forEach((inp) => inp.addEventListener("input", (e) => { answers[q.id + "__other"] = e.target.value; }));
    return;
  }

  // multi
  $$(".ks-opt", card).forEach((btn) => btn.addEventListener("click", () => {
    const i = Number(btn.dataset.i);
    toggleMulti(q, i);
    render();
  }));
  $$(".ks-opt__other", card).forEach((inp) => inp.addEventListener("input", (e) => { answers[q.id + "__other"] = e.target.value; }));
}

function toggleMulti(q, i) {
  const opt = q.options[i];
  let sel = Array.isArray(answers[q.id]) ? [...answers[q.id]] : [];
  if (opt.exclusive) {
    answers[q.id] = sel.includes(i) ? [] : [i];
    return;
  }
  sel = sel.filter((x) => !q.options[x].exclusive);
  if (sel.includes(i)) {
    sel = sel.filter((x) => x !== i);
    if (opt.other) delete answers[q.id + "__other"];
  } else {
    if (q.maxSelect && sel.length >= q.maxSelect) {
      const cardEl = $("#ks-card");
      cardEl.classList.add("ks-shake");
      setTimeout(() => cardEl.classList.remove("ks-shake"), 350);
      return;
    }
    sel.push(i);
  }
  answers[q.id] = sel;
}

function onContinue(q) {
  if (!validateCurrent()) {
    const err = $("#ks-error");
    err.classList.add("is-on");
    err.closest(".card")?.classList.add("ks-shake");
    setTimeout(() => err.closest(".card")?.classList.remove("ks-shake"), 350);
    return;
  }
  if (q.id === "D1") return submit();
  goto(1);
}

/* ---------- gửi dữ liệu ---------- */
function buildPayload() {
  const flat = {};
  for (const q of QUESTIONS) {
    const v = answers[q.id];
    if (q.type === "multi") flat[q.id] = Array.isArray(v) ? v.map((i) => q.options[i].label).join(";") : "";
    else if (q.type === "scale5") flat[q.id] = v != null ? String(v) : "";
    else if (q.type === "phone") flat[q.id] = v === 0 ? "Có" : v === 1 ? "Chưa tiện, cho mình lấy mã luôn" : "";
    else flat[q.id] = v != null && q.options?.[v] ? q.options[v].label : "";
    if (answers[q.id + "__other"]) flat[q.id + "_khac"] = answers[q.id + "__other"];
  }
  flat.D1_phone = answers.D1 === 0 ? (answers.D1_phone || "") : "";
  flat.D1_consent = answers.D1 === 0 ? (answers.D1_consent ? "co" : "khong") : "";
  return {
    session, src, started_at: startedAt.toISOString(), submitted_at: new Date().toISOString(),
    duration_sec: Math.round((Date.now() - startedAt.getTime()) / 1000),
    user_agent: navigator.userAgent, ...flat,
  };
}
function sendToSheet(sheet, data) {
  if (!CONFIG.surveyScriptUrl) return;
  const body = new URLSearchParams({ sheet, ...data });
  fetch(CONFIG.surveyScriptUrl, { method: "POST", body }).catch(() => {});
}
function logEvent(type) { sendToSheet("events", { type, session, src, ts: new Date().toISOString() }); }

function submit() {
  logEvent("xong_phan_D");
  sendToSheet("answers", buildPayload());
  logEvent("nop");
  store.set(DONE_KEY, true);
  currentKey = "thanks";
  render();
}

/* ---------- trang cảm ơn ---------- */
function renderThanks(card) {
  card.innerHTML = `
    <span class="tag tag--ok" style="width:fit-content">${esc(THANK_YOU.chip)}</span>
    <h2 class="card__title" style="font-size:22px">${esc(THANK_YOU.title)}</h2>
    <p class="muted">${esc(THANK_YOU.lead)}</p>
    <div class="ks-voucher">
      <p class="ks-voucher__title">Quà tặng của bạn</p>
      <p style="margin:0;font-size:14.5px;color:var(--navy-deep)">Mã ưu đãi đồ uống Highlands, The Coffee House, Ding Tea</p>
      <a class="btn btn--pink" style="justify-content:center" href="${ACTION_BUTTONS[0].url}" target="_blank" rel="noopener" data-act="1">Lấy mã ưu đãi</a>
    </div>
    <p class="eyebrow" style="margin-top:4px">Dành riêng cho bạn</p>
    <a class="ks-action" href="${ACTION_BUTTONS[1].url}" target="_blank" rel="noopener" data-act="2">
      <span class="ks-action__icon">${icon(ACTION_BUTTONS[1].icon)}</span>
      <span><b>${esc(ACTION_BUTTONS[1].label)}</b><small>${esc(ACTION_BUTTONS[1].desc)}</small></span>
      <span class="ks-action__go">${icon("arrow")}</span>
    </a>
    <div class="ks-grid2">
      <a class="ks-action" href="${ACTION_BUTTONS[2].url}" target="_blank" rel="noopener" data-act="3">
        <span class="ks-action__icon">${icon(ACTION_BUTTONS[2].icon)}</span>
        <span><b>${esc(ACTION_BUTTONS[2].label)}</b><small>${esc(ACTION_BUTTONS[2].desc)}</small></span>
      </a>
      <a class="ks-action" href="${ACTION_BUTTONS[3].url}" target="_blank" rel="noopener" data-act="4">
        <span class="ks-action__icon">${icon(ACTION_BUTTONS[3].icon)}</span>
        <span><b>${esc(ACTION_BUTTONS[3].label)}</b><small>${esc(ACTION_BUTTONS[3].desc)}</small></span>
      </a>
    </div>
    <p class="ks-foot-note">${esc(THANK_YOU.footnote)}</p>
    <p class="ks-foot-note">${esc(FOOTER_NOTE)}</p>`;
  $$("[data-act]", card).forEach((a) => a.addEventListener("click", () => logEvent(`nut_${a.dataset.act}`)));
  hydrateIcons(card);
  $("#ks-bottom").innerHTML = "";
  $("#ks-bottom").style.display = "none";
}

function renderThanksMinor(card) {
  card.innerHTML = `
    <h2 class="card__title" style="font-size:22px">${esc(THANK_YOU_MINOR.title)}</h2>
    <p class="muted">${esc(THANK_YOU_MINOR.lead)}</p>
    <a class="btn btn--pink" style="justify-content:center" href="${ACTION_BUTTONS[0].url}" target="_blank" rel="noopener">Lấy mã ưu đãi</a>
    <p class="ks-foot-note">${esc(FOOTER_NOTE)}</p>`;
  $("#ks-bottom").innerHTML = "";
  $("#ks-bottom").style.display = "none";
}

/* ---------- khởi động ---------- */
(function init() {
  if (store.get(DONE_KEY, false)) { currentKey = "thanks"; render(); return; }
  logEvent("mo_trang");
  render();
})();
