# Sổ tay bán Điểm Tựa Viện Phí

Trang hướng dẫn cho publisher và CTV của ACCESSTRADE bán bảo hiểm Điểm Tựa Viện Phí (BHYT mở rộng) của MB Life. Kế hoạch đầy đủ ở `docs/PLAN.md`, quy chuẩn giao diện ở `docs/DESIGN.md`.

## Cách chạy

Không cần build. Trang dùng ES modules nên phải mở qua server:

```
npx serve .
# hoặc
python3 -m http.server 8080
```

## Cấu trúc

```
index.html              khung trang, các section rỗng có id
assets/css/tokens.css   màu, chữ, bo góc, bóng
assets/css/main.css     toàn bộ giao diện
assets/js/config.js     link chiến dịch, kênh hỗ trợ, ngày cập nhật
assets/js/main.js       đọc data, vẽ các section
assets/js/modules/      search, calculator, copy, checklist, icons
data/*.js               toàn bộ nội dung, mỗi file một mảng
```

Sửa nội dung thì sửa `data/`, không viết chữ cứng trong `main.js`.

## Quy tắc nội dung (bắt buộc)

- Mọi thông tin về sản phẩm phải có nguồn: `web` (website MB Life), `slide` (slide đào tạo MB Life), `webinar` (webinar 11/11), `conf` (xác nhận trong group dự án, ghi ngày), `wait` (chờ MB Life). Không tự suy ra quyền lợi.
- Giữ nguyên số liệu, tên, thuật ngữ khi viết lại. Đối chiếu bảng phí với slide đào tạo trước khi sửa.
- Được dùng logo MB Life (đã xác nhận với team, 2026-11-13). Đặt logo MB Life trước logo AT khi hai logo xuất hiện cùng nhau. Không viết câu cam kết bồi thường. Bài đăng mẫu luôn có nhãn "[Nội dung quảng cáo]".
- Không đưa hoa hồng gross của AT với MB Life lên trang. Chỉ đưa mức publisher nhận (17-20% phí năm đầu).
- Ở AT "publisher" là người làm affiliate.

## Quy tắc viết

- Tiếng Việt đời thường, câu dài ngắn xen nhau, có số liệu cụ thể cạnh nhận định.
- Không dùng gạch dài, chỉ dùng "-" (viết "2-3", "6-60 tuổi").
- Không dùng emoji làm đầu mục, không icon đúng/sai, không số khoanh tròn.
- Bỏ từ sáo: then chốt, góp phần, nâng tầm, hành trình, đa chiều, vô cùng, thực sự, trọn vẹn, mở ra cơ hội.
- Không mở đoạn bằng: Hơn nữa, Bên cạnh đó, Ngoài ra, Tóm lại, Nhìn chung, Có thể thấy.
- Tránh "Không phải X mà là Y", "Không chỉ X mà còn Y".
- Không chêm tiếng Anh khi có từ Việt thông dụng (hook, CTA, POV...). Giữ thuật ngữ ngành: publisher, sub-id, CPS.
- Soát trước khi xong: gạch dài, cấu trúc "không phải/không chỉ", từ nối đầu đoạn, số liệu so với nguồn.

## Quy tắc giao diện

Xem `docs/DESIGN.md`. Tóm tắt: font Be Vietnam Pro, chữ tiêu đề xanh navy, nút và điểm nhấn hồng, thẻ trắng bo 20px trên nền xám xanh nhạt, mỗi tiêu đề section có gạch hồng ngắn bên dưới. Thiết kế cho điện thoại trước, thanh lối tắt cố định ở đáy màn hình dưới 720px.

## Kiểm tra trước khi giao

- Mở ở 390px và 1280px, không có cuộn ngang
- Tìm thử: "viện tư", "bệnh nền", "mua cho con", "hoa hồng" đều ra kết quả
- Công cụ tính với mặc định 150tr / 80% / 60tr / bệnh hiểm nghèo ra: chỉ BHYT 90tr, Tiêu chuẩn 60tr, Nâng cao 0đ
- Nút Copy hoạt động
