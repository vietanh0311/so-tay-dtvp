// Bộ icon nét mảnh dùng chung. Gắn bằng <span data-icon="ten"></span>.
const P = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  script: '<path d="M7 3h10v18H7z"/><path d="M10 8h4M10 12h4M10 16h2"/>',
  phone: '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M11 18h2"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/>',
  folder: '<path d="M3 6h7l2 2h9v11H3z"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
  play: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3z"/>',
  shield: '<path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z"/><path d="M12 9v6M9 12h6"/>',
  hospital: '<path d="M4 21V8l8-4 8 4v13z"/><path d="M12 9v6M9 12h6M10 21v-3h4v3"/>',
  zalo: '<path d="M4 5h16v11H9l-5 4z"/><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>',
};
export function icon(name) {
  const p = P[name];
  return p ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>` : "";
}
export function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => { if (!el.innerHTML) el.innerHTML = icon(el.dataset.icon); });
}
