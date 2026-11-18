// Quy tắc truyền thông, bồi thường, hoa hồng, tài liệu. Nguồn: webinar 11/11, slide đào tạo MB Life.

export const SAY_PAIRS = [
  { ok: "Hỗ trợ thanh toán phần viện phí nội trú còn lại sau khi BHYT đã chi trả", no: "Bảo hiểm thanh toán hết 100% mọi khoản viện phí" },
  { ok: "Chỉ áp dụng khi người bệnh nằm điều trị nội trú tại các cơ sở y tế công lập", no: "Đi khám ngoại trú lấy thuốc hay nằm viện tư nhân đều được thanh toán" },
  { ok: "Sản phẩm áp dụng thời gian chờ: tai nạn 0 ngày, bệnh thông thường 30 ngày, bệnh hiểm nghèo và bệnh đặc biệt 90 ngày", no: "Vừa mua xong hôm nay thì ngày mai ốm nằm viện cũng được nhận tiền ngay" },
  { ok: "Bản Nâng cao trả thêm chi phí ngoài phạm vi BHYT cho 60 bệnh hiểm nghèo; nếu chọn nằm phòng dịch vụ nâng cao thì mức chi trả là 30%", no: "Không cần khai báo bệnh nền, cứ nộp hồ sơ là chắc chắn được bồi thường" },
];

export const DONT_POST = [
  "Truyền thông sai lệch bản chất sản phẩm, phóng đại quyền lợi hoặc cố tình che giấu các điều kiện bắt buộc về nằm nội trú, bệnh viện công lập và thời gian chờ",
  "Đưa ra các cam kết tuyệt đối như “chắc chắn được bồi thường”, “trả 100% viện phí”",
  "So sánh trực diện nhằm hạ thấp uy tín hoặc bôi nhọ các doanh nghiệp bảo hiểm khác trên thị trường",
  "Viết bài gây hiểu lầm đây là thẻ BHYT bắt buộc của nhà nước hoặc là một sản phẩm gửi tiết kiệm tích lũy sinh lời",
  "Đăng tin tặng miễn phí, chiết khấu giảm giá, hoàn tiền (cashback), tặng quà hiện vật hoặc chia sẻ hoa hồng để lôi kéo người mua",
  "Đứng ra điền thông tin hộ, khai báo sức khỏe thay, lưu giữ giấy tờ tùy thân hoặc nhận tiền chuyển khoản trung gian của khách hàng",
  "Tự xưng là nhân viên chính thức hay đại lý độc quyền của MB Life; tự ý lập fanpage, tài khoản mạng xã hội mạo danh thương hiệu MB Life",
  "Đăng tải bài viết quảng bá sản phẩm nhưng không gắn nhãn nhận diện nội dung quảng cáo theo quy định pháp luật hiện hành",
];

export const ADS_RULES = [
  "Nghiêm cấm đấu thầu từ khóa thương hiệu gồm: MB Life, MB Ageas, MB Bank, Điểm Tựa Viện Phí và toàn bộ các từ khóa biến thể liên quan; bắt buộc phải thêm các cụm từ này vào danh sách từ khóa phủ định (negative keywords) khi thiết lập chiến dịch",
  "Khi triển khai quảng cáo tìm kiếm (Search Ads), đường link đích bắt buộc phải trỏ về trang trung gian (pre-landing page) đã qua phê duyệt của ACCESSTRADE, không trỏ trực tiếp về trang mua hàng của MB Life",
  "Không tự ý sử dụng tên thương hiệu, logo của MB Life khi chưa có văn bản đồng ý; khi đăng bài trên mạng xã hội chỉ được phép sử dụng bộ banner và hình ảnh truyền thông chuẩn do ACCESSTRADE cung cấp",
  "Tuyệt đối không đặt tên fanpage, tên tài khoản cá nhân, hội nhóm hoặc tên miền website có chứa cụm từ “MB Life”",
  "Có trách nhiệm gỡ bỏ hoàn toàn các bài đăng, quảng cáo vi phạm trong vòng 24 giờ kể từ thời điểm nhận được thông báo từ ACCESSTRADE",
  "Tất cả bài viết, kịch bản video hoặc hình ảnh do publisher tự biên soạn đều phải gửi cho đội ngũ ACCESSTRADE kiểm duyệt và chấp thuận trước khi đăng tải công khai",
];

export const CLAIM_STEPS = [
  { title: "Chuẩn bị đầy đủ bộ chứng từ", text: "Bao gồm giấy ra viện, tóm tắt bệnh án, đơn thuốc (có ghi rõ chẩn đoán và đóng dấu bệnh viện), hóa đơn tài chính, bảng kê chi tiết viện phí và ảnh chụp thẻ BHYT. Lưu ý: Với lần đầu tiên gửi yêu cầu bồi thường, khách hàng cần chụp kèm màn hình lịch sử khám chữa bệnh BHYT trong 2 năm gần nhất trên ứng dụng VNeID hoặc VssID." },
  { title: "Gửi hồ sơ trực tuyến qua ứng dụng MB Life Style", text: "Đăng nhập ứng dụng, chọn mục Giải quyết quyền lợi, tải toàn bộ ảnh chụp chứng từ lên hệ thống và điền số tài khoản ngân hàng nhận tiền. Thời hạn nộp hồ sơ tối đa là 1 năm tính từ ngày kết thúc đợt điều trị." },
  { title: "Theo dõi và nhận kết quả thẩm định", text: "Hồ sơ sẽ do Công ty CP Insmart (đơn vị được MB Life ủy quyền) trực tiếp thẩm định và thông báo kết quả qua tin nhắn SMS trong vòng 30 ngày kể từ khi nhận đủ chứng từ hợp lệ." },
];

export const REJECT_REASONS = [
  ["Không phải điều trị nội trú", "Khách hàng chỉ khám và lấy thuốc ngoại trú, hoặc thời gian lưu viện chưa qua 12 giờ đêm và tổng thời gian nằm viện chưa đủ 12 tiếng"],
  ["Điều trị ngoài hệ thống bệnh viện công lập", "Khách hàng nằm viện tại các bệnh viện tư nhân, bệnh viện quốc tế, hoặc điều trị tại các viện y học cổ truyền, viện phục hồi chức năng, bệnh viện tâm thần"],
  ["Không sử dụng thẻ BHYT", "Khách hàng nhập viện nhưng không xuất trình thẻ BHYT, hoặc đợt điều trị đó nằm ngoài diện BHYT chi trả"],
  ["Tự ý vượt tuyến", "Mắc bệnh thông thường nhưng tự ý vượt tuyến từ cấp ban đầu lên thẳng bệnh viện cấp chuyên sâu"],
  ["Chưa kết thúc thời gian chờ", "Sự kiện xảy ra khi hợp đồng vẫn đang trong thời gian chờ: 30 ngày đối với bệnh thông thường, 90 ngày đối với bệnh hiểm nghèo và 7 nhóm bệnh đặc biệt"],
  ["Kê khai không trung thực về bệnh có sẵn", "Bệnh đã có từ trước ngày hợp đồng có hiệu lực nhưng khách hàng không khai báo hoặc khai sai trong bảng câu hỏi sức khỏe lúc đăng ký"],
  ["Sai sót về hồ sơ và mức phí", "Tổng tiền yêu cầu bồi thường từ 100.000đ trở xuống, nộp hồ sơ trễ quá 1 năm hoặc thiếu chứng từ hợp lệ"],
];

export const RECORD_STEPS = [
  "Khách truy cập trang đăng ký thông qua link của publisher",
  "Khách hoàn tất chuyển khoản thanh toán",
  "MB Life phát hành hợp đồng và thu được phí",
];

export const MATERIALS = [
  { icon: "folder", title: "Thư mục tài liệu", meta: "Brochure, leaflet, video, slide", url: "https://drive.google.com/drive/folders/1WA3zFdCPmFiLXV7Y0jvpmKaaFuYHIE2k" },
  { icon: "doc", title: "Brochure A5", meta: "PDF", url: "https://drive.google.com/file/d/1a_VW1jLbs4mf-g9OR_5wRY2N0QG7-KO-/view" },
  { icon: "doc", title: "Leaflet A5", meta: "PDF", url: "https://drive.google.com/file/d/17Xsbf0Gx0QsRSiCn0uGoFP0pbD7EOF5p/view" },
  { icon: "play", title: "Video sản phẩm", meta: "MP4", url: "https://drive.google.com/file/d/1fiS0V7FsSo9kkP0Sc6dPWTItN_IpImA9/view" },
  { icon: "shield", title: "Hướng dẫn bồi thường", meta: "Ảnh", url: "https://drive.google.com/file/d/1agMsaRIp4-DiIdA7g3dsxr6_Ckax6hjU/view" },
  { icon: "hospital", title: "Cơ sở y tế áp dụng", meta: "mblife.vn", url: "https://mblife.vn/san-pham/bao-hiem-y-te-mo-rong-diem-tua-vien-phi#co-so-y-te-ap-dung" },
];

// Ảnh/poster gốc MB Life cho CTV tải về đăng Zalo, Facebook. Đặt file thật vào assets/img/ theo đúng tên dưới đây.
export const KIT_IMAGES = [
  { src: "assets/img/kit-poster-tong-quan.png", title: "Poster tổng quan sản phẩm", meta: "Dọc 9:16 - đăng Story" },
  { src: "assets/img/kit-poster-2-goi.webp", title: "Không điểm tựa 39 triệu hay có điểm tựa 0 đồng", meta: "Minh họa - tư vấn chọn gói" },
  { src: "assets/img/kit-cover-fb.png", title: "Ảnh bìa Facebook, Zalo OA", meta: "Ngang - ảnh bìa trang" },
];

export const SAMPLE_POSTS = [
  { label: "Dân văn phòng", text: `[Nội dung quảng cáo]
Thử làm một phép tính nhỏ: một ca mổ ruột thừa nằm viện công 15 ngày, tổng hết 15 triệu. Dù có thẻ BHYT mức hưởng 80% thì mình vẫn phải tự bỏ tiền túi khoảng 3 triệu.
Hiện có gói bảo hiểm y tế mở rộng giúp trả nốt phần viện phí còn lại sau BHYT khi nằm điều trị nội trú ở bệnh viện công. Phí cho độ tuổi 26-30 chỉ 360k/năm (tính ra khoảng 1.000đ/ngày).
Lưu ý nhỏ: gói chỉ áp dụng điều trị nội trú tại viện công, bệnh thông thường có thời gian chờ 30 ngày và cần có sẵn thẻ BHYT mới tham gia được.
Xem biểu phí theo tuổi tại đây: [link]` },
  { label: "Phụ huynh", text: `[Nội dung quảng cáo]
Các bé đi học đều đã có thẻ BHYT, nhưng mỗi lần con ốm phải nhập viện, bố mẹ vẫn phải tự xoay xở khoản đồng chi trả cùng tiền thuốc ngoài danh mục.
Đã có gói bảo hiểm y tế mở rộng dành cho trẻ từ 6 tuổi, phí chỉ từ 310k/năm, hỗ trợ trả phần viện phí còn lại sau BHYT khi con nằm điều trị nội trú ở viện công.
Lưu ý nhỏ: khi đăng ký online cho con từ 6-17 tuổi, không cần quét khuôn mặt của con, chỉ cần tải ảnh CCCD hoặc giấy khai sinh.
Xem biểu phí theo tuổi của bé tại đây: [link]` },
];
