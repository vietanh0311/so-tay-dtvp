// Công cụ tính viện phí. Đơn vị: triệu đồng.
// Quy tắc lấy từ slide đào tạo MB Life:
// - Tiêu chuẩn: trả phần đồng chi trả trong phạm vi BHYT, tối đa 100tr/năm
// - Nâng cao, bệnh hiểm nghèo: trả đồng chi trả + chi phí ngoài phạm vi BHYT, tối đa 2.000tr/năm
//   nằm phòng nâng cao thì chỉ trả 30% (ví dụ slide: 30% x (60 + 200) = 78tr)
// - Nâng cao, bệnh thường: như Tiêu chuẩn
// - Đợt có chi phí bồi thường từ 100.000đ trở xuống không trả
export function compute({ inScope, rate, outScope, critical, upgradedRoom }) {
  const copay = Math.max(0, inScope) * (1 - rate);
  const out = Math.max(0, outScope);
  const selfOnly = copay + out;

  let std = Math.min(copay, 100);
  if (std <= 0.1) std = 0;

  let adv;
  if (critical) {
    adv = copay + out;
    if (upgradedRoom) adv *= 0.3;
    adv = Math.min(adv, 2000);
  } else {
    adv = Math.min(copay, 100);
  }
  if (adv <= 0.1) adv = 0;

  return { selfOnly, std, adv, selfStd: selfOnly - std, selfAdv: selfOnly - adv };
}

const fmt = (n) => {
  n = Math.max(0, n);
  if (n === 0) return "0đ";
  return n >= 1000 ? `${(n / 1000).toLocaleString("vi-VN", { maximumFractionDigits: 2 })} tỷ` : `${n.toLocaleString("vi-VN", { maximumFractionDigits: 1 })} tr`;
};

export function initCalculator() {
  const $id = (id) => document.getElementById(id);
  const inScope = $id("in-scope"), rate = $id("rate"), outScope = $id("out-scope");
  const roomQ = $id("room-q"), roomNote = $id("room-note");
  const out = $id("calc-out");
  const radios = [...document.querySelectorAll('input[name="disease"], input[name="room"]')];
  const val = (name) => document.querySelector(`input[name="${name}"]:checked`)?.value;

  const render = () => {
    const critical = val("disease") === "critical";
    // Loại phòng chỉ có tác dụng khi điều trị bệnh hiểm nghèo ở bản Nâng cao
    roomQ.disabled = !critical;
    roomQ.classList.toggle("is-off", !critical);
    roomNote.textContent = critical
      ? "Phòng dịch vụ nâng cao là phòng có giá giường trên 150% mức BHYT trả. Nếu khách nằm phòng này khi điều trị bệnh hiểm nghèo, bản Nâng cao chỉ chi trả 30%."
      : "Chỉ cần chọn khi khách điều trị bệnh hiểm nghèo. Với bệnh thông thường, loại phòng không làm thay đổi kết quả.";

    const ins = Math.max(0, parseFloat(inScope.value) || 0);
    const outs = Math.max(0, parseFloat(outScope.value) || 0);
    const rt = parseFloat(rate.value);
    const r = compute({ inScope: ins, rate: rt, outScope: outs, critical, upgradedRoom: critical && val("room") === "upgraded" });
    const total = ins + outs;
    const bhyt = ins * rt;
    const pct = (n) => (total > 0 ? (Math.max(0, n) / total) * 100 : 0);

    const row = (title, mb, self) => `
      <div class="cres">
        <div class="cres__head">
          <span class="cres__title">${title}</span>
          <span class="cres__self ${self <= 0.05 ? "is-zero" : ""}"><small>Khách tự trả</small>${fmt(self)}</span>
        </div>
        <div class="cres__bar" aria-hidden="true">
          <span class="seg-bhyt" style="width:${pct(bhyt)}%"></span><span class="seg-mb" style="width:${pct(mb)}%"></span><span class="seg-self" style="width:${pct(self)}%"></span>
        </div>
        <p class="cres__detail">BHYT trả ${fmt(bhyt)}${mb == null ? "" : ` · Điểm Tựa Viện Phí trả ${fmt(mb)}`} · Khách tự trả ${fmt(self)}</p>
      </div>`;

    out.innerHTML = `
      <p class="calc__total">Tổng viện phí đợt điều trị: <b>${fmt(total)}</b></p>
      <div class="calc__legend" aria-hidden="true"><span class="lg-bhyt">BHYT trả</span><span class="lg-mb">Điểm Tựa Viện Phí trả</span><span class="lg-self">Khách tự trả</span></div>
      ${row("Chỉ có BHYT", null, r.selfOnly)}
      ${row("Có thêm bản Tiêu chuẩn", r.std, r.selfStd)}
      ${row("Có thêm bản Nâng cao", r.adv, r.selfAdv)}`;
  };
  [inScope, rate, outScope, ...radios].forEach((e) => { e.addEventListener("input", render); e.addEventListener("change", render); });
  render();
}
