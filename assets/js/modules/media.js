// Khi chưa có file ảnh/video thật trong assets/img hoặc assets/video, ẩn icon ảnh vỡ
// và hiện nhãn tạm, để không làm hỏng giao diện trước khi có file từ MB Life.
function showFallback(img) {
  img.style.display = "none";
  const label = document.createElement("span");
  label.className = "media-img__missing";
  label.textContent = "Ảnh đang chờ cập nhật";
  img.parentElement.appendChild(label);
}

export function hydrateMediaFallback(root = document) {
  root.querySelectorAll("img.media-img").forEach((img) => {
    // ảnh 404 trước khi script gắn listener (thường gặp khi chạy local, lỗi tới rất nhanh)
    if (img.complete && img.naturalWidth === 0) { showFallback(img); return; }
    img.addEventListener("error", () => showFallback(img), { once: true });
  });
}
