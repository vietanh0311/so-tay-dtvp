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
  gift: '<rect x="4" y="9.5" width="16" height="10.5" rx="1.5"/><path d="M4 9.5h16M12 9.5v10.5M8.2 9.5c-1.6 0-3.2-1-3.2-2.8C5 4.9 6.3 4 7.6 4 9.7 4 11.2 6.1 12 9.5c.8-3.4 2.3-5.5 4.4-5.5 1.3 0 2.6.9 2.6 2.7 0 1.8-1.6 2.8-3.2 2.8"/>',
  share: '<circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="5.5" r="2.3"/><circle cx="18" cy="18.5" r="2.3"/><path d="M8 10.8 16 6.9M8 13.2 16 17.1"/>',
  check: '<path d="M4 13l4.5 4.5L20 6"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c.9-3.9 3.9-6 7.5-6s6.6 2.1 7.5 6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3M12 14.5v2"/>',
  coin: '<circle cx="12" cy="12" r="8.5"/><path d="M14.6 9.2c-.5-.9-1.5-1.4-2.6-1.4-1.5 0-2.6.8-2.6 2s1.1 1.7 2.6 2c1.5.3 2.6.8 2.6 2.1s-1.1 2.1-2.6 2.1c-1.2 0-2.2-.5-2.7-1.4M12 6.3v1.5M12 16.2v1.5"/>',
  layers: '<path d="M12 3 3 7.5 12 12l9-4.5z"/><path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5"/>',
  arrow: '<path d="M5 12h13M13 6l6 6-6 6"/>',
};
export function icon(name) {
  const p = P[name];
  return p ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>` : "";
}
export function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => { if (!el.innerHTML) el.innerHTML = icon(el.dataset.icon); });
}
