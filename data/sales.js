// Luồng bán 6 bước. Câu mẫu dựa trên slide đào tạo MB Life và webinar 11/11.

export const ONBOARDING = [
  { id: "c1", text: "Đăng ký chiến dịch trên ACCESSTRADE và tạo link bán. Chưa có tài khoản pub2 thì đăng ký trước. Nên tách riêng sub-id cho từng kênh (Facebook, Zalo, group, website) để dễ đo hiệu quả.", href: "https://workspace.accesstrade.vn/authentication/register?lang=en&utm_source=mblife", linkLabel: "Đăng ký tài khoản" },
  { id: "c2", text: "Đọc kỹ mục Sản phẩm, nhớ nằm lòng 4 điều kiện: nằm nội trú, viện công, có thẻ BHYT và đủ thời gian chờ.", href: "#san-pham" },
  { id: "c3", text: "Tự bấm vào link của mình, nhập ngày sinh để xem phí và đi thử tới bước khai sức khỏe (chưa cần thanh toán) cho quen giao diện." },
  { id: "c4", text: "Copy sẵn mẫu tin nhắn chuẩn bị trước khi mua, lưu vào ghi chú điện thoại để tiện gửi khách.", href: "#mua-online" },
  { id: "c5", text: "Đọc kỹ 4 câu cấm nói. Nếu khách phản ánh về việc tư vấn sai lệch, publisher sẽ bị dừng hợp tác.", href: "#quy-tac" },
  { id: "c6", text: "Gửi thông tin cho 5 người quen trong độ tuổi 25-45, đang đi làm và đã có BHYT để luyện cách tư vấn.", href: "#luong-ban" },
];

export const SALE_STEPS = [
  {
    title: "Chọn đúng tệp khách",
    goal: "Ưu tiên người từ 25-45 tuổi, đang đi làm, có thẻ BHYT, đặc biệt là người đã lập gia đình hoặc phụ huynh có con nhỏ 6-15 tuổi. Tránh chào mời người đang điều trị bệnh hoặc người trên 60 tuổi mua mới.",
    script: "Nhóm dễ chốt nhất là dân văn phòng 25-35 tuổi chưa mua bảo hiểm sức khỏe riêng, và các gia đình trẻ 30-45 tuổi đã có khoản tích lũy, luôn lo ngại cảnh một người nằm viện là cả nhà hao hụt tiền tiết kiệm.",
    scriptLabel: "Gợi ý tệp",
  },
  {
    title: "Mở lời bằng câu hỏi về BHYT",
    goal: "Khoan nhắc đến chuyện mua bán hay giá cả. Hãy đặt câu hỏi để khách tự nhẩm tính phần viện phí mình phải gánh.",
    script: "Anh/chị đang dùng thẻ BHYT đúng không ạ? Em hỏi vui chút, nếu chẳng may phải nằm viện công hết khoảng 40 triệu, theo anh/chị thì BHYT sẽ trả bao nhiêu và mình phải tự bù bao nhiêu?",
  },
  {
    title: "Chỉ ra con số tự trả cụ thể",
    goal: "Dùng ví dụ có con số rõ ràng để khách dễ hình dung. Ca nhẹ thì lấy ví dụ mổ ruột thừa, ca nặng thì kể trường hợp chị Th. hết 137 triệu.",
    script: "BHYT thường trả 80% các khoản trong danh mục, phần còn lại mình tự trả hết ạ. Ví dụ một ca mổ ruột thừa nằm viện 15 ngày hết 15 triệu thì mình vẫn phải bù khoảng 3 triệu. Còn nếu gặp bệnh nặng phải dùng thuốc ngoài danh mục, như một ca ung thư tổng viện phí 137 triệu, phần khách tự trả lên tới 39 triệu đồng.",
  },
  {
    title: "Báo phí và gợi ý gói phù hợp",
    goal: "Hỏi năm sinh người được bảo hiểm rồi báo giá chuẩn theo bảng phí. Nếu ngân sách dưới 400k thì tư vấn bản Tiêu chuẩn, còn gia đình có tiền sử bệnh hiểm nghèo thì hướng sang bản Nâng cao.",
    script: "Ở độ tuổi 31-35 của anh/chị thì bản Tiêu chuẩn phí là 380.000đ/năm, tính ra hơn 1.000đ mỗi ngày, hỗ trợ trả phần còn lại sau BHYT tối đa 100 triệu/năm. Còn bản Nâng cao phí 670.000đ/năm, hạn mức tới 2 tỷ, chi trả thêm cả thuốc và kỹ thuật ngoài danh mục BHYT nếu không may mắc 1 trong 60 bệnh hiểm nghèo.",
  },
  {
    title: "Nói thẳng điều kiện trước khi chốt",
    goal: "Bốn lỗi tư vấn MB Life gặp nhiều nhất là: hứa trả hết 100%, quên nhắc chỉ áp dụng viện công, quên báo thời gian chờ và bỏ sót quy tắc trả 30% khi nằm phòng nâng cao. Nói rõ từ đầu giúp khách yên tâm và tránh khiếu nại về sau.",
    script: "Em dặn trước mấy điều kiện này để anh/chị nắm rõ: gói này chỉ chi trả khi nằm viện nội trú ở bệnh viện công lập, có dùng thẻ BHYT và đi đúng tuyến. Bệnh thông thường sẽ có thời gian chờ 30 ngày, bệnh hiểm nghèo chờ 90 ngày, riêng tai nạn thì được bảo vệ ngay. Với bản Nâng cao, nếu điều trị bệnh hiểm nghèo mà mình chọn nằm phòng dịch vụ nâng cao thì bảo hiểm chỉ trả 30% thôi ạ.",
  },
  {
    title: "Gửi link và theo sát tới bước thanh toán",
    goal: "Gửi kèm tin nhắn hướng dẫn chuẩn bị giấy tờ khi gửi link. Với khách trên 50 tuổi, bạn nên gọi video hỗ trợ trực tiếp ở 3 bước: khai sức khỏe, quét khuôn mặt và chuyển khoản QR. Khi hợp đồng phát hành, nhớ nhắc khách tải ứng dụng MB Life Style.",
    script: "Anh/chị thao tác xong thì nhắn em một tiếng nhé. Anh/chị tải sẵn app MB Life Style về máy luôn, sau này lỡ có đi viện thì chỉ cần chụp giấy ra viện, hóa đơn và bảng kê gửi trực tiếp trên app là được.",
  },
];

export const PREP_MESSAGE = `Dạ anh/chị chuẩn bị sẵn giúp em mấy thứ này trước khi bấm link để thao tác cho nhanh nhé:
1. CCCD bản gốc và thẻ BHYT (hoặc mở sẵn app VssID/VNeID để xem mã số thẻ)
2. Ngồi ở nơi đủ ánh sáng, tháo kính và mũ để hệ thống quét khuôn mặt chuẩn xác
3. Mở sẵn app ngân hàng vì trang đăng ký chỉ nhận chuyển khoản qua mã QR, chưa hỗ trợ thẻ hay ví điện tử
4. Tới phần câu hỏi sức khỏe, anh/chị cứ khai đúng tình trạng của mình. Có mục nào chưa rõ thì nhắn em hỏi trước khi bấm tiếp nhé
Link đăng ký: [dán link ACCESSTRADE của bạn]`;

export const BUY_STEPS = [
  { group: "Xem phí", title: "Nhập ngày sinh, xem phí", tip: "Điền đúng ngày sinh của người được bảo hiểm (từ 6-60 tuổi)." },
  { group: "Xem phí", title: "Chọn Tiêu chuẩn hoặc Nâng cao", tip: "Mỗi người chỉ được chọn 1 trong 2 bản." },
  { group: "Kê khai", title: "Chọn nghề nghiệp", tip: "Hệ thống sẽ chặn một số nhóm nghề nhất định. Danh sách chi tiết đang chờ MB Life cập nhật." },
  { group: "Kê khai", title: "Trả lời câu hỏi BHYT", tip: "Khách bắt buộc phải có thẻ BHYT còn hiệu lực, nếu không có hệ thống sẽ dừng lại." },
  { group: "Kê khai", title: "Khai sức khỏe và FATCA", tip: "Khách tự đọc và khai trung thực. Nếu có bệnh nền, MB Life có thể chấp nhận, loại trừ bệnh đó hoặc từ chối bảo hiểm. Không khai hộ, không xúi khách giấu bệnh.", hot: true },
  { group: "Định danh", title: "Chụp CCCD 2 mặt, điền liên hệ", tip: "Hệ thống tự quét thông tin từ ảnh chụp. Nếu nhận diện sai ký tự nào, khách cần sửa lại bằng tay trước khi qua bước sau." },
  { group: "Định danh", title: "Quét khuôn mặt", tip: "Cần camera rõ nét, đủ sáng, không đeo kính hay đội mũ. Nếu mua cho người thân, cả người mua và người được bảo hiểm đều phải quét khuôn mặt.", hot: true },
  { group: "Thanh toán", title: "Nhập OTP", tip: "Mã xác thực gửi về số điện thoại khách vừa đăng ký." },
  { group: "Thanh toán", title: "Chuyển khoản qua mã QR", tip: "Chỉ chấp nhận quét mã QR chuyển khoản. Đơn hàng chỉ lên báo cáo sau khi MB Life xác nhận đã thu được phí.", hot: true },
];
