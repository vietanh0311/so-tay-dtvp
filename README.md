# Sổ tay bán Điểm Tựa Viện Phí

Trang hướng dẫn cho publisher và CTV ACCESSTRADE bán bảo hiểm Điểm Tựa Viện Phí của MB Life.

## Chạy thử

```
npx serve .
```

Mở http://localhost:3000. Không mở trực tiếp file `index.html` vì trình duyệt chặn ES modules qua `file://`.

## Sửa nội dung

| Muốn sửa | File |
|---|---|
| Link chiến dịch, trạng thái bản nháp, hotline | `assets/js/config.js` |
| Biểu phí, 2 gói, thời gian chờ, bảng kê chị Th. | `data/product.js` |
| Danh sách 15 phút, luồng bán, tin nhắn chuẩn bị, 9 bước mua | `data/sales.js` |
| Kịch bản xử lý băn khoăn | `data/objections.js` |
| Hỏi đáp và nhãn nguồn | `data/faq.js` |
| Quy tắc, bồi thường, hoa hồng, tài liệu, bài mẫu | `data/rules.js` |

Câu hỏi mới: thêm một dòng vào nhóm phù hợp trong `data/faq.js`, ghi `src` đúng nguồn, thêm từ khóa không dấu vào `k`.

## Đưa lên mạng

Thư mục này là trang tĩnh, kéo thả vào Netlify Drop, hoặc `npx vercel`, hoặc đẩy lên GitHub Pages.

## Tài liệu dự án

- `docs/PLAN.md`: mục tiêu, khó khăn, lộ trình, câu hỏi còn mở
- `docs/DESIGN.md`: màu, chữ, thành phần
- `CLAUDE.md`: quy tắc cho Claude Code khi sửa dự án
