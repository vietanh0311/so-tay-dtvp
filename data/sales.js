// Luồng bán 6 bước. Câu mẫu dựa trên slide đào tạo MB Life và webinar 11/11.

export const ONBOARDING = [
  { id: "c1", text: "Đăng ký chiến dịch trên hệ thống ACCESSTRADE và tạo link phân phối. Nếu chưa có tài khoản pub2, bạn hãy đăng ký tài khoản trước. Hãy tạo riêng từng sub-id cho mỗi kênh (Facebook, Zalo, hội nhóm, website) để theo dõi chính xác kênh nào ra đơn.", href: "https://workspace.accesstrade.vn/authentication/register?lang=en&utm_source=mblife", linkLabel: "Đăng ký tài khoản" },
  { id: "c2", text: "Đọc kỹ phần Sản phẩm và ghi nhớ 4 điều kiện cốt lõi: điều trị nội trú, tại bệnh viện công lập, có sử dụng thẻ BHYT và đã qua thời gian chờ.", href: "#san-pham" },
  { id: "c3", text: "Tự bấm vào đường link của chính bạn, điền thử ngày sinh để xem biểu phí và thao tác nháp tới bước khai báo sức khỏe (chưa cần thanh toán) để nắm rõ từng màn hình." },
  { id: "c4", text: "Copy sẵn mẫu tin nhắn dặn khách chuẩn bị giấy tờ, lưu vào mục ghi chú trong điện thoại để gửi nhanh khi khách đồng ý mua.", href: "#mua-online" },
  { id: "c5", text: "Đọc kỹ 4 câu cấm kỵ khi tư vấn. Mọi trường hợp khách hàng phản ánh về việc publisher cam kết sai sự thật đều dẫn đến khóa quyền chạy chiến dịch.", href: "#quy-tac" },
  { id: "c6", text: "Chọn ra 5 người quen trong độ tuổi 25-45, đang đi làm và đã có thẻ BHYT để trò chuyện thử và làm quen nhịp tư vấn.", href: "#luong-ban" },
];

export const SALE_STEPS = [
  {
    title: "Chọn đúng tệp khách hàng",
    goal: "Tập trung vào nhóm khách từ 25-45 tuổi, đang đi làm và đã có thẻ BHYT, đặc biệt là người đã lập gia đình hoặc có con nhỏ 6-15 tuổi. Không chào mời người đang điều trị bệnh hoặc người đã trên 60 tuổi muốn mua mới.",
    script: "Hai nhóm khách dễ ra đơn nhất là nhân viên văn phòng 25-35 tuổi chỉ mới có BHYT công ty mà chưa có thẻ sức khỏe riêng, và các gia đình trẻ 30-45 tuổi muốn giữ an toàn cho khoản tiền tiết kiệm của cả nhà trước các chi phí y tế phát sinh.",
    scriptLabel: "Gợi ý tệp",
  },
  {
    title: "Mở lời tự nhiên từ câu chuyện thẻ BHYT",
    goal: "Chưa đề cập chuyện mua bán hay báo giá ở bước này. Tuyệt đối tránh các câu hỏi giả định cảnh ốm đau, nằm viện. Hãy khơi gợi nhẹ nhàng về tỷ lệ hưởng trên thẻ BHYT để khách tự tính ra khoản chênh lệch.",
    script: "Anh/chị đi làm chắc đang có sẵn thẻ BHYT rồi đúng không ạ? Bình thường thẻ BHYT phổ biến ở mức hưởng 80% chi phí trong danh mục, nhiều người cứ nghĩ có thẻ là viện thanh toán hết, nhưng thực tế 20% còn lại với các khoản thuốc ngoài danh mục vẫn là tiền túi mình tự trả đấy ạ.",
  },
  {
    title: "Đưa ra con số thực tế để khách dễ hình dung",
    goal: "Dẫn chứng bằng các ca thực tế có số liệu rõ ràng: một ca thông thường như mổ ruột thừa và một ca bệnh nặng như trường hợp của chị Th. hết 137 triệu.",
    script: "Do BHYT thường thanh toán 80% trong danh mục nên phần chênh lệch thực tế khá lớn ạ. Ví dụ một ca mổ ruột thừa nằm viện 15 ngày tổng chi phí 15 triệu, sau khi trừ BHYT thì người bệnh vẫn phải tự đóng thêm khoảng 3 triệu. Còn với những ca bệnh hiểm nghèo cần dùng nhiều thuốc đặc trị ngoài danh mục, như trường hợp điều trị ung thư hết tổng cộng 137 triệu, số tiền phải tự bỏ ra lên tới 39 triệu đồng.",
  },
  {
    title: "Báo phí theo tuổi và gợi ý gói sát nhu cầu",
    goal: "Hỏi năm sinh của người dự định tham gia để tra cứu đúng mức phí. Khách cần tiết kiệm dưới 400k thì giới thiệu bản Tiêu chuẩn; khách muốn dự phòng cả chi phí ngoài danh mục cho bệnh nặng thì tư vấn bản Nâng cao.",
    script: "Với độ tuổi 31-35 của anh/chị, bản Tiêu chuẩn có phí 380.000đ/năm (tính ra chỉ hơn 1.000đ mỗi ngày), giúp thanh toán phần đồng chi trả sau BHYT với hạn mức tới 100 triệu/năm. Còn bản Nâng cao phí 670.000đ/năm, hạn mức bảo vệ lên đến 2 tỷ/năm, thanh toán thêm cả tiền thuốc và dịch vụ kỹ thuật ngoài danh mục BHYT cho 60 bệnh hiểm nghèo ạ.",
  },
  {
    title: "Minh bạch 4 điều kiện cốt lõi trước khi gửi link",
    goal: "Bốn sai sót phổ biến nhất khi tư vấn là: hứa hẹn bảo hiểm trả hết 100%, quên nói chỉ áp dụng ở viện công, quên nhắc thời gian chờ và bỏ sót quy định chi trả 30% khi nằm phòng nâng cao. Trao đổi thẳng thắn ngay từ đầu giúp khách tin tưởng và bảo vệ uy tín của bạn.",
    script: "Trước khi gửi link đăng ký, em xin phép điểm qua vài điều kiện quan trọng để anh/chị nắm thật rõ nhé: Sản phẩm này áp dụng khi điều trị nội trú tại bệnh viện công lập, có dùng thẻ BHYT và đi đúng tuyến. Về thời gian chờ thì tai nạn được bảo vệ ngay, bệnh thông thường chờ 30 ngày, bệnh hiểm nghèo chờ 90 ngày. Riêng ở bản Nâng cao, khi điều trị bệnh hiểm nghèo mà mình chọn nằm phòng dịch vụ nâng cao thì mức chi trả sẽ tính ở mức 30% quyền lợi ạ.",
  },
  {
    title: "Gửi link và đồng hành đến lúc hoàn tất thanh toán",
    goal: "Gửi đường link kèm theo tin nhắn dặn chuẩn bị giấy tờ. Đối với khách hàng trên 50 tuổi, hãy chủ động gọi video hướng dẫn trực tiếp ở 3 thao tác: khai báo sức khỏe, quét khuôn mặt và quét QR chuyển khoản. Khi hợp đồng được cấp, nhắc khách tải ngay ứng dụng MB Life Style.",
    script: "Em gửi anh/chị đường link đăng ký kèm mấy lưu ý nhỏ bên dưới nhé, lúc thao tác có bước nào cần hỗ trợ anh/chị cứ nhắn em. Đăng ký xong anh/chị tải thêm ứng dụng MB Life Style về điện thoại để quản lý hợp đồng, sau này cần giải quyết quyền lợi thì mình cũng chụp giấy tờ gửi online ngay trên ứng dụng đó luôn ạ.",
  },
];

export const PREP_MESSAGE = `Dạ trước khi bấm vào link đăng ký, anh/chị chuẩn bị sẵn giúp em mấy mục này để thao tác một mạch cho nhanh nhé:
1. CCCD bản gốc và thẻ BHYT (hoặc mở sẵn ứng dụng VssID / VNeID để tra mã số thẻ BHYT).
2. Ngồi ở chỗ đủ ánh sáng, bỏ kính và mũ khi đến bước chụp ảnh xác thực khuôn mặt.
3. Mở sẵn ứng dụng ngân hàng trên máy vì cổng thanh toán chỉ nhận chuyển khoản qua mã QR, chưa hỗ trợ thẻ hay ví điện tử.
4. Ở bước câu hỏi sức khỏe, anh/chị cứ tích chọn đúng tình trạng thực tế của mình. Nếu có câu nào chưa rõ ý thì nhắn em giải thích trước khi bấm tiếp nhé.
Link đăng ký chính thức: [dán link ACCESSTRADE của bạn]`;

export const BUY_STEPS = [
  { group: "Xem phí", title: "Nhập ngày sinh, xem phí", tip: "Chọn đúng ngày tháng năm sinh của người được bảo hiểm (trong độ tuổi từ 6-60 tuổi)." },
  { group: "Xem phí", title: "Chọn Tiêu chuẩn hoặc Nâng cao", tip: "Mỗi người được bảo hiểm chọn 1 trong 2 chương trình phù hợp với nhu cầu." },
  { group: "Kê khai", title: "Chọn nghề nghiệp", tip: "Sản phẩm không giới hạn ngành nghề tham gia, khách chỉ cần chọn đúng công việc hiện tại." },
  { group: "Kê khai", title: "Trả lời câu hỏi BHYT", tip: "Khách bắt buộc phải có thẻ BHYT đang còn hiệu lực; nếu chọn chưa có BHYT, hệ thống sẽ dừng quy trình đăng ký." },
  { group: "Kê khai", title: "Khai sức khỏe và FATCA", tip: "Khách tự đọc câu hỏi và kê khai trung thực. Gói Điểm Tựa Viện Phí chỉ có 2 kết quả thẩm định: MB Life chấp nhận cấp hợp đồng bình thường hoặc từ chối cấp, hoàn toàn không có hình thức loại trừ riêng bệnh nền. Publisher tuyệt đối không khai thay hay xúi khách giấu bệnh.", hot: true },
  { group: "Định danh", title: "Chụp CCCD 2 mặt, điền liên hệ", tip: "Hệ thống tự động trích xuất chữ từ ảnh chụp CCCD. Khách cần kiểm tra lại và sửa tay nếu có ký tự nhận diện chưa chuẩn trước khi sang bước kế tiếp." },
  { group: "Định danh", title: "Quét khuôn mặt", tip: "Cần camera rõ nét, đủ sáng, không đeo kính hay đội mũ. Nếu mua cho người thân từ 18 tuổi trở lên, cả người mua lẫn người được bảo hiểm đều phải có mặt cùng lúc để lần lượt quét khuôn mặt. Nếu mua cho trẻ từ 6-17 tuổi, bé không cần quét khuôn mặt, chỉ cần tải lên ảnh chụp CCCD hoặc giấy khai sinh.", hot: true },
  { group: "Thanh toán", title: "Nhập OTP", tip: "Nhập mã xác thực được gửi về số điện thoại khách vừa kê khai." },
  { group: "Thanh toán", title: "Chuyển khoản qua mã QR", tip: "Hệ thống chỉ nhận thanh toán qua hình thức quét mã QR ngân hàng. Đơn hàng sẽ được ghi nhận lên báo cáo sau khi MB Life xác nhận thu phí thành công.", hot: true },
];
