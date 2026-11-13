# Kế hoạch: Sổ tay bán Điểm Tựa Viện Phí

Cập nhật 13/11/2026. Người phụ trách: Việt Anh (Optimize Account, ACCESSTRADE). Người duyệt nội dung: chị Trần Huyền (MB Life).

## 1. Mục tiêu

Trang web một chỗ cho publisher và CTV bán Điểm Tựa Viện Phí: hiểu sản phẩm, biết nói gì với khách, dẫn khách đi hết luồng mua online, tra câu hỏi khi đang chat với khách.

Đo bằng 3 con số chung:
- Tỷ lệ click ra hợp đồng theo sub-id, so trước và sau khi có sổ tay
- Số câu hỏi lặp lại gửi về team AT mỗi tuần (mục tiêu giảm)
- Số lượt tìm kiếm trên trang không ra kết quả (để bổ sung Q&A)

Đo riêng theo từng tính năng (để biết nên giữ, sửa hay bỏ):
| Tính năng | Đo gì |
|---|---|
| Tìm kiếm đầu trang | Số lượt tìm, top từ khóa, tỷ lệ không ra kết quả |
| Công cụ tính viện phí | Số lượt dùng, tỷ lệ dùng xong rồi bấm sang mục Sản phẩm/luồng mua |
| Nút Copy (câu mẫu, kịch bản) | Số lần bấm, câu nào được copy nhiều nhất |
| Link riêng từng câu hỏi (`#q-...`) | Số lượt mở qua link so với mở từ trong trang |
| Lộ trình 15 phút | Tỷ lệ tick hết danh sách |
| Form "Chưa có câu này" | Số lượt gửi mỗi tuần, nội dung gửi (đầu vào cho Q&A mới) |

## 2. Khó khăn của sản phẩm và tính năng tương ứng

| Khó khăn | Biểu hiện | Tính năng trên trang |
|---|---|---|
| Khách chưa biết BHYT mở rộng là gì | "Có BHYT rồi mua thêm làm gì" | Bảng kê chị Th. 137tr (tự trả 39tr so với 0đ), công cụ tính viện phí |
| Publisher nhầm sản phẩm này với bảo hiểm sức khỏe thường (FWD, VBI, Manulife...), tư vấn sai hướng | Rủ khách "bỏ BHYT mua cái này cho khỏe" hoặc nói "chọn viện nào cũng được" | Mục riêng "Khác gì với bảo hiểm sức khỏe khác" - nói rõ đây là lớp trả sau BHYT, chỉ viện công, không thay BHYT |
| AT là đơn vị đầu tiên bán, CTV chưa có ai để học theo | Nhận link xong để đó | Lộ trình 15 phút, luồng bán 6 bước có câu mẫu copy |
| Luồng mua 9 bước, 3 bước dễ rớt (khai sức khỏe, quét mặt, chuyển khoản QR), khách 50+ rớt nhiều | Nhiều click ít đơn | Hướng dẫn từng bước, tin nhắn "chuẩn bị trước khi mua" |
| Tư vấn sai thì khách khiếu nại, publisher bị dừng hợp tác | Hứa "trả hết", quên nói chỉ viện công, quên nói phòng nâng cao chỉ trả 30%, quên nói thời gian chờ | Q&A có nhãn nguồn, mục Nên nói / Không nói (lấy đúng 4 lỗi tư vấn viên thường gặp trong slide đào tạo MB Life) |
| Mua cho người nhà cần 2 người ngồi cùng để xác thực khuôn mặt | Khách ở xa bỏ dở | Hướng dẫn riêng, kịch bản "mua cho bố mẹ, con" |
| Chưa có HĐ đầu tiên, pub dễ nản | Ít hoạt động sau webinar | Bảng tin (giai đoạn 3) |

Nguồn số liệu BHYT và lỗi tư vấn viên thường gặp: `slide` - "Slide SP ĐIỂM TỰA VIỆN PHÍ_ Accesstrade.pdf" (Drive, thư mục đào tạo MB Life, đọc 13/11/2026).

## 3. Người dùng và tình huống

1. CTV đang chat Zalo với khách trên điện thoại, cần câu trả lời trong 10 giây: ô tìm kiếm đầu trang, kết quả hiện luôn câu trả lời.
2. Publisher mới vào chiến dịch: đọc từ trên xuống, tick danh sách 15 phút.
3. Publisher làm nội dung (bài đăng, video): mục Quy tắc và Tài liệu.

## 4. Cấu trúc trang

Thứ tự đi theo tâm lý đọc (nỗi đau → bạn được gì → cách bán), không theo thứ tự "giáo trình" như bản đầu. Mỗi mục cuối trang có 1 câu bắc cầu sang mục sau, kèm nút nhảy xuống, để giữ người đọc đi tuyến tính.

1. **Đầu trang** - xem chi tiết slogan và bố cục ở mục 4.1 dưới đây
2. **Vì sao sản phẩm này đáng bán** - bảng kê chị Th. 137tr + công cụ tính viện phí (gộp 2 mục cũ), dùng số liệu BHYT thật (95,2% đã có BHYT, 43% tự trả, chi phí tự trả theo tuyến xã/huyện/tỉnh/trung ương) - nguồn `slide`
3. **Khác gì với bảo hiểm sức khỏe khác** (mới) - bảng so sánh ngắn: sản phẩm này chỉ trả phần còn lại sau BHYT, chỉ viện công, cần BHYT còn hiệu lực mới chạy được; không nêu tên đối thủ cụ thể, chỉ nói "bảo hiểm sức khỏe thông thường". Câu chốt: đây là lớp vá cho BHYT, không phải thứ thay BHYT
4. **Bạn được gì khi bán** - hoa hồng và ghi nhận theo sub-id (dời từ vị trí 11 lên đây) - trả lời "được gì" ngay sau khi hiểu nỗi đau, trước khi bắt đọc chi tiết sản phẩm
5. Bắt đầu trong 15 phút
6. Sản phẩm: 2 bản, chọn tuổi để xem phí và hoa hồng, thời gian chờ, ai mua được
7. Luồng bán 6 bước
8. Hướng dẫn mua online 9 bước
9. Kịch bản xử lý băn khoăn
10. Hỏi đáp (lọc theo nhóm)
11. Bồi thường
12. Quy tắc truyền thông
13. Tài liệu và bài đăng mẫu
14. Thanh lối tắt cố định ở đáy màn hình (dưới 720px) - 4 nút nhảy nhanh đến Tìm kiếm, Sản phẩm, Luồng mua, Hỏi đáp, cho người quay lại tra cứu chứ không đọc lại từ đầu

### 4.1 Đầu trang - chi tiết

Mục tiêu: 3 giây đầu phải giữ được người đọc. Bố cục gồm 4 lớp xếp từ trên xuống:

- Nhãn nhỏ phía trên tiêu đề: "SỔ TAY BÁN ĐIỂM TỰA VIỆN PHÍ" hoặc tên chiến dịch
- Tiêu đề lớn - chọn 1 trong các slogan dưới đây, chữ navy đậm, không quá 2 dòng trên điện thoại
- Câu phụ 1 dòng giải thích đúng định vị sản phẩm (lớp trả sau BHYT), để slogan không bị hiểu lầm thành cam kết bồi thường
- Dải số liệu ngang (3-4 số): kéo cả nỗi đau và lợi ích publisher vào cùng tầm mắt, ví dụ 95,2% đã có BHYT / 43% vẫn tự trả / hoa hồng 17-20% / phí từ 310.000đ/năm
- Ô tìm kiếm + gợi ý nhanh (đặt ngay dưới dải số liệu, không phải trên)

Tiêu đề lớn đã chốt: **"Hãy quên mọi điều bạn từng biết về bảo hiểm sức khỏe."**

Câu phụ đi kèm, bắt buộc đặt ngay dưới tiêu đề, không bỏ: "Điểm Tựa Viện Phí không thay BHYT. Nó trả đúng phần BHYT để lại, sau khi BHYT đã thanh toán." - câu này chặn việc tiêu đề bị hiểu thành lời hứa trả hết, đúng quy tắc "không viết câu cam kết bồi thường" ở CLAUDE.md.

4 slogan còn lại giữ làm phương án dự phòng để test sau (A/B) hoặc dùng làm tiêu đề phụ cho mục 2 "Vì sao sản phẩm này đáng bán":
- "BHYT trả trước. Điểm Tựa Viện Phí trả phần còn lại."
- "43% chi phí khám BHYT, người bệnh tự trả. Đây là phần MB Life nhận trả."
- "95,2% người Việt đã có BHYT. Phần còn thiếu, giờ có người lo."
- "Phí từ 310.000đ một năm, chưa tới 1.000đ một ngày - cho phần BHYT không trả hết."

Lưu ý khi viết thật: số 95,2% và 43% nguồn `slide` (BHXH Việt Nam, trích trong slide đào tạo), không đổi số khi viết lại.

## 5. Lộ trình

Giai đoạn 1, bản gửi MB Life duyệt (13-14/11):

Phần nội dung cần MB Life duyệt (chị Trần Huyền):
- Bảng phí, bảng hoa hồng, bảng kê minh họa 137tr, toàn bộ Q&A và kịch bản
- Câu chưa chắc gắn nhãn "Chờ MB Life", không đưa lên bản duyệt

Phần tính năng kỹ thuật, làm song song, không chờ duyệt nội dung:
- Trang tĩnh 1 trang, nội dung nằm trong `data/`, không cần build
- Tìm kiếm, công cụ tính viện phí, nút Copy, thanh lối tắt đáy màn hình
- Form "Chưa có câu này" ghi vào Google Sheet qua Apps Script (đưa lên sớm từ giai đoạn 1 vì đây là nguồn dữ liệu cho metric "tìm không ra kết quả" ở mục 1, không cần chờ giai đoạn 2)

Giai đoạn 2, sau khi MB Life duyệt:
- Ảnh chụp màn hình 9 bước mua (lấy từ slide 8-12 webinar hoặc tự chụp lại)
- Link riêng cho từng câu hỏi (`#q-...`) để CTV gửi nhau
- Gắn đo lường (GA4 hoặc Umami) theo bảng ở mục 1
- Danh sách nghề bị chặn khi MB Life gửi (xem mục 6, câu #1) - cần trước khi mở form đăng ký/checklist cho CTV, vì liên quan điều kiện mua

Giai đoạn 3:
- Bài kiểm tra 10 câu (slide đào tạo MB Life có sẵn quiz) để CTV tự kiểm tra trước khi bán
- Bảng tin: số HĐ toàn mạng, câu chuyện bán đầu tiên
- Video quay màn hình luồng mua

## 6. Câu hỏi còn mở

| # | Câu hỏi | Hỏi ai | Trạng thái | Chặn tính năng nào |
|---|---|---|---|---|
| 1 | Danh sách nghề bị chặn | MB Life | Chưa có | Mục "ai mua được" (section 3) và checklist/form đăng ký cho CTV ở giai đoạn 2 - làm được khung, chưa điền được điều kiện chặn theo nghề |
| 2 | Công thức công cụ tính viện phí có đúng ý MB Life | MB Life | Chờ duyệt | Công cụ tính viện phí (section 4) - chặn thẳng, không công bố số nếu công thức chưa duyệt |
| 3 | Hotline cho khách: brochure ghi (024) 222 9 8888, website ghi 024 7309 9866 | MB Life | Chưa hỏi | Không chặn feature, chỉ chặn nội dung hiển thị số hotline |
| 4 | Được dùng màu, hình minh họa giống landing Điểm Tựa Viện Phí không | MB Life | Chưa hỏi | Không chặn feature, chỉ ảnh hưởng bước design |
| 5 | Link đăng ký chiến dịch trên ACCESSTRADE, kênh hỗ trợ publisher | Team AT | Điền vào `assets/js/config.js` | Không chặn feature nào, chỉ là dữ liệu cấu hình |

Đã xác nhận 12/11: người mua từ 18 tuổi, trẻ 6-17 chỉ là người được bảo hiểm; mua cho người khác cần 2 người cùng chỗ để xác thực; không có BHYT không mua được; khách huỷ HĐ không ảnh hưởng.

## 7. Triển khai

Trang tĩnh, đưa lên Vercel, Netlify hoặc GitHub Pages là chạy. Nếu dùng tên miền AT thì đặt dạng `accesstrade.vn/so-tay/diem-tua-vien-phi` hoặc subdomain do team IT cấp.
