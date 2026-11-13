// Hỏi đáp. src: web | slide | webinar | conf | wait. k: từ khóa tìm kiếm không dấu.

export const SOURCES = {
  web: { tone: "ok", label: "Website MB Life" },
  slide: { tone: "ok", label: "Slide đào tạo MB Life" },
  webinar: { tone: "ok", label: "Webinar 11/11" },
  conf: { tone: "ok", label: "Xác nhận 12/11" },
  wait: { tone: "warn", label: "Chờ MB Life" },
};

export const FAQ = [
  { group: "Sản phẩm", items: [
    { id: "khac-bhyt", q: "Khác gì Bảo hiểm y tế nhà nước?", a: "BHYT nhà nước thông thường thanh toán 80% chi phí nằm trong danh mục, phần chênh lệch còn lại người bệnh tự chi trả. Điểm Tựa Viện Phí đóng vai trò là lớp bảo vệ thứ 2: bản Tiêu chuẩn trả phần đồng chi trả cùng BHYT, còn bản Nâng cao hỗ trợ thêm chi phí ngoài danh mục BHYT cho 60 bệnh hiểm nghèo.", src: "web", k: "co bhyt roi khac bhyt" },
    { id: "kham-suc-khoe", q: "Có cần khám sức khỏe trước khi mua?", a: "Không cần. Khách hàng chỉ cần trả lời trung thực bảng câu hỏi tình trạng sức khỏe ngay trên màn hình đăng ký online.", src: "web", k: "kham suc khoe" },
    { id: "vien-tu", q: "Viện tư, viện quốc tế có được trả?", a: "Không. Quyền lợi chỉ áp dụng khi điều trị nội trú tại các cơ sở y tế công lập trên toàn quốc. Các bệnh viện y học cổ truyền, phục hồi chức năng và tâm thần cũng không thuộc phạm vi chi trả.", src: "web", k: "vien tu quoc te dich vu" },
    { id: "ngoai-tru", q: "Khám ngoại trú có được trả?", a: "Không. Sản phẩm chỉ thanh toán cho điều trị nội trú, nghĩa là người bệnh phải nằm viện qua 12 giờ đêm và đủ ít nhất 12 tiếng, có đầy đủ giấy nhập viện và giấy ra viện.", src: "slide", k: "ngoai tru noi tru" },
    { id: "trai-tuyen", q: "Trái tuyến có được trả không?", a: "Trường hợp cấp cứu luôn được chi trả. Bệnh hiểm nghèo được phép tự đi trái tuyến lên thẳng cấp chuyên sâu. Với bệnh thông thường, nếu tự đi từ tuyến ban đầu lên tuyến cơ bản (ví dụ từ trạm y tế xã lên bệnh viện tỉnh) vẫn được trả; nhưng nếu tự vượt tuyến thẳng lên cấp chuyên sâu (ví dụ đau dạ dày tự lên BV Bạch Mai) thì không được chi trả.", src: "slide", k: "trai tuyen dung tuyen vuot tuyen" },
    { id: "phong-nang-cao", q: "Phòng tiêu chuẩn và phòng nâng cao khác nhau thế nào?", a: "Phòng nâng cao được tính là phòng có giá giường một ngày cao hơn 150% mức giá giường BHYT chấp nhận tại bệnh viện đó. Với bản Nâng cao, nếu điều trị bệnh hiểm nghèo mà khách nằm phòng nâng cao ở bất kỳ thời điểm nào trong đợt điều trị, mức chi trả sẽ chỉ tính 30% quyền lợi.", src: "slide", k: "phong nang cao dich vu 30" },
    { id: "thoi-gian-cho", q: "Thời gian chờ bao lâu?", a: "Tai nạn được bảo vệ ngay (0 ngày), bệnh thông thường chờ 30 ngày, bệnh hiểm nghèo và nhóm bệnh đặc biệt chờ 90 ngày. Nhóm bệnh đặc biệt bao gồm: thoát vị, u lành, lao, hen suyễn, trĩ, amidan/VA, các bệnh vùng mũi xoang và tuyến giáp. Từ năm tái tục trở đi sẽ không còn thời gian chờ.", src: "slide", k: "thoi gian cho" },
    { id: "so-ngay", q: "Số ngày nằm viện tối đa được trả?", a: "Tối đa không quá 150 ngày trong mỗi năm hợp đồng và không quá 1.000 ngày trong suốt thời gian tham gia bảo hiểm.", src: "slide", k: "so ngay nam vien" },
    { id: "loai-tru", q: "Những trường hợp loại trừ hay gặp?", a: "Các trường hợp phổ biến bị loại trừ gồm: mang thai, sinh con (trừ nguyên nhân do tai nạn); điều trị răng miệng, tật khúc xạ mắt kính; rối loạn tâm thần; bệnh phát sinh do rượu bia, chất kích thích; dị tật bẩm sinh; chơi thể thao chuyên nghiệp hoặc mạo hiểm; liệu pháp tế bào CAR-T; và các bệnh có sẵn nhưng không kê khai.", src: "slide", k: "loai tru thai san sinh con rang" },
    { id: "khong-bhyt", q: "Không có BHYT có mua được không?", a: "Không. Sản phẩm này thiết kế gắn liền với thẻ BHYT, hệ thống đăng ký sẽ kiểm tra thông tin BHYT và chặn không cho tiếp tục nếu khách chưa có thẻ.", src: "conf", k: "khong co bhyt" },
    { id: "tai-tuc", q: "Tái tục thế nào?", a: "Hợp đồng có thời hạn 1 năm và được gia hạn tái tục hằng năm cho đến khi người được bảo hiểm đạt 65 tuổi. Khách có 60 ngày gia hạn đóng phí tính từ ngày đến hạn nộp phí.", src: "slide", k: "tai tuc gia han" },
  ]},
  { group: "Mua và thanh toán", items: [
    { id: "do-tuoi", q: "Độ tuổi tham gia?", a: "Người được bảo hiểm nằm trong độ tuổi 6-60 tuổi. Người đứng tên mua hợp đồng phải từ 18 tuổi trở lên. Trẻ em từ 6-17 tuổi tham gia với tư cách người được bảo hiểm, do bố hoặc mẹ đứng tên mua.", src: "conf", k: "tuoi tre em con" },
    { id: "mua-cho-nguoi-than", q: "Mua cho bố mẹ, con, người thân được không?", a: "Hoàn toàn được theo quy tắc sản phẩm. Tuy nhiên, quá trình đăng ký online yêu cầu quét khuôn mặt xác thực cả người mua lẫn người được bảo hiểm nên hai người bắt buộc phải ngồi cùng một chỗ khi thao tác.", src: "conf", k: "mua cho bo me con nguoi than ho" },
    { id: "thanh-toan", q: "Thanh toán bằng gì?", a: "Hệ thống chỉ hỗ trợ chuyển khoản ngân hàng qua mã QR. Hiện chưa áp dụng thanh toán bằng thẻ tín dụng/ghi nợ hay các loại ví điện tử.", src: "webinar", k: "thanh toan qr the vi" },
    { id: "benh-nen", q: "Có bệnh nền thì sao?", a: "Khách hàng cần kê khai đúng tình trạng sức khỏe. Dựa trên hồ sơ khai báo, MB Life có thể chấp nhận bảo hiểm bình thường, áp dụng loại trừ riêng bệnh nền đó hoặc từ chối cấp hợp đồng. Publisher tuyệt đối không khai thay khách.", src: "webinar", k: "benh nen huyet ap tieu duong" },
    { id: "nghe-nghiep", q: "Nghề nào không mua được?", a: "Hệ thống đăng ký có giới hạn một số nhóm nghề nghiệp đặc thù. Danh sách ngành nghề chi tiết đang chờ MB Life cung cấp, hiện tại bạn chưa nên khẳng định chắc chắn với khách.", src: "wait", k: "nghe nghiep chan" },
    { id: "doi-y", q: "Khách đổi ý sau khi thanh toán?", a: "Nếu khách yêu cầu hủy trước thời điểm MB Life chính thức chấp nhận bảo hiểm và phát hành hợp đồng, khách sẽ được hoàn lại toàn bộ số phí đã đóng.", src: "webinar", k: "huy hoan phi doi y" },
  ]},
  { group: "Bồi thường", items: [
    { id: "gui-yeu-cau", q: "Gửi yêu cầu ở đâu, bao lâu có kết quả?", a: "Khách gửi hồ sơ trực tuyến ngay trên ứng dụng MB Life Style tại mục Giải quyết quyền lợi. Kết quả giải quyết sẽ có trong vòng 30 ngày kể từ khi nhận đủ hồ sơ hợp lệ và được thông báo qua tin nhắn SMS. Trường hợp từ chối, MB Life sẽ gửi văn bản giải thích rõ lý do.", src: "webinar", k: "boi thuong app" },
    { id: "insmart", q: "Ai xử lý hồ sơ?", a: "Công ty CP Insmart là đơn vị được MB Life ủy quyền tiếp nhận và giải quyết quyền lợi bồi thường cho dòng sản phẩm này.", src: "slide", k: "insmart" },
    { id: "thoi-han-nop", q: "Nộp hồ sơ trong bao lâu?", a: "Khách cần gửi yêu cầu bồi thường trong vòng 1 năm kể từ ngày kết thúc đợt điều trị. Các đợt điều trị có tổng chi phí yêu cầu bồi thường từ 100.000đ trở xuống sẽ không thuộc diện chi trả.", src: "webinar", k: "thoi han nop" },
  ]},
  { group: "Hoa hồng", items: [
    { id: "muc-hoa-hong", q: "Hoa hồng bao nhiêu?", a: "Mức hoa hồng là 17-20% tính trên phí bảo hiểm thực thu năm đầu. Ví dụ với khách hàng 31-35 tuổi mua bản Tiêu chuẩn phí 380.000đ, publisher sẽ nhận về khoảng 64.600-76.000đ.", src: "webinar", k: "hoa hong" },
    { id: "ghi-nhan", q: "Khi nào đơn lên báo cáo?", a: "Đơn hàng được ghi nhận lên hệ thống báo cáo khi khách truy cập qua link của publisher, hoàn tất thanh toán và phía MB Life phát hành hợp đồng, thu phí thành công.", src: "webinar", k: "ghi nhan bao cao don" },
    { id: "huy-hop-dong", q: "Khách hủy hợp đồng có bị trừ hoa hồng?", a: "Không bị ảnh hưởng đến hoa hồng đã ghi nhận.", src: "conf", k: "huy hop dong hoa hong" },
    { id: "chia-hoa-hong", q: "Có được chia hoa hồng, hoàn tiền cho khách?", a: "Không được phép. Theo quy định của Luật Kinh doanh bảo hiểm, các hình thức cashback, chiết khấu hay chia lại hoa hồng cho người mua đều bị nghiêm cấm trong chiến dịch này.", src: "webinar", k: "cashback hoan tien chia" },
    { id: "quang-cao", q: "Chạy quảng cáo tìm kiếm được không?", a: "Được phép chạy nếu quảng cáo dẫn khách về một trang trung gian đã qua kiểm duyệt của ACCESSTRADE. Tuyệt đối cấm đấu thầu từ khóa thương hiệu như MB Life, MB Ageas, MB Bank, Điểm Tựa Viện Phí và các biến thể liên quan. Mọi đơn phát sinh từ quảng cáo vi phạm sẽ bị hủy khi đối soát.", src: "webinar", k: "quang cao google sem seo tu khoa" },
  ]},
];
