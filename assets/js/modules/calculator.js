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
  const ids = ["in-scope", "rate", "out-scope", "bhn", "room"];
  const el = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
  const out = document.getElementById("calc-out");

  const render = () => {
    const r = compute({
      inScope: parseFloat(el["in-scope"].value) || 0,
      rate: parseFloat(el.rate.value),
      outScope: parseFloat(el["out-scope"].value) || 0,
      critical: el.bhn.checked,
      upgradedRoom: el.room.checked,
    });
    const max = Math.max(r.selfOnly, 0.0001);
    const row = (cls, label, self, paid) => `
      <div class="cbar ${cls}">
        <span class="cbar__label">${label}</span>
        <span class="cbar__track"><span class="cbar__fill" style="width:${(Math.max(0, self) / max) * 100}%"></span></span>
        <span class="cbar__val">${fmt(self)}<small>${paid == null ? "khách tự trả" : "MB Life trả " + fmt(paid)}</small></span>
      </div>`;
    out.innerHTML =
      row("", "Chỉ có BHYT", r.selfOnly) +
      row("cbar--std", "Có bản Tiêu chuẩn", r.selfStd, r.std) +
      row("cbar--adv", "Có bản Nâng cao", r.selfAdv, r.adv);
  };
  ids.forEach((id) => el[id].addEventListener("input", render));
  render();
}
