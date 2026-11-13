// Quy tắc truyền thông, bồi thường, hoa hồng, tài liệu. Nguồn: webinar 11/11, slide đào tạo MB Life.

export const SAY_PAIRS = [
  { ok: "Hỗ trợ trả phần viện phí nội trú còn lại sau khi BHYT đã thanh toán", no: "Bảo hiểm trả 100% tất cả các loại viện phí" },
  { ok: "Chỉ áp dụng khi nằm điều trị nội trú tại bệnh viện công lập", no: "Khám ngoại trú hay nằm viện tư đều được đền" },
  { ok: "Có quy định thời gian chờ: tai nạn 0 ngày, bệnh thường 30 ngày, bệnh hiểm nghèo 90 ngày", no: "Mua xong là được bảo vệ và nhận tiền ngay" },
  { ok: "Bản Nâng cao trả thêm chi phí ngoài phạm vi BHYT cho 60 bệnh hiểm nghèo; nếu nằm phòng nâng cao chỉ trả 30%", no: "Không cần khai sức khỏe, chắc chắn được bồi thường" },
];

export const DONT_POST = [
  "Truyền đạt sai lệch, thổi phồng quyền lợi hoặc cố tình lờ đi các điều kiện về nội trú, viện công và thời gian chờ",
  "Đưa ra lời hứa chắc chắn được bồi thường 100%",
  "Đem sản phẩm ra so sánh hạ thấp hoặc nói xấu các công ty bảo hiểm khác",
  "Viết bài gây hiểu nhầm đây là BHYT nhà nước hoặc một gói gửi tiết kiệm sinh lời",
  "Tung tin miễn phí, giảm giá, hoàn tiền, tặng quà hiện vật hoặc chia hoa hồng cho người mua",
  "Đứng ra khai sức khỏe hộ, giữ thông tin cá nhân hoặc thu tiền hộ khách hàng",
  "Tự nhận mình là nhân viên, tư vấn viên chính thức của MB Life hoặc lập fanpage giả mạo thương hiệu",
  "Đăng bài quảng bá sản phẩm nhưng không gắn nhãn nội dung quảng cáo theo quy định",
];

export const ADS_RULES = [
  "Cấm chạy đấu thầu các từ khóa thương hiệu gồm MB Life, MB Ageas, MB Bank, Điểm Tựa Viện Phí cùng mọi biến thể; bắt buộc cài đặt danh sách từ khóa phủ định này",
  "Nếu chạy quảng cáo tìm kiếm, trang đích phải là trang trung gian đã được ACCESSTRADE phê duyệt",
  "Không tự ý sử dụng tên gọi, logo MB Life khi chưa có văn bản chấp thuận; khi đăng mạng xã hội chỉ dùng bộ banner và hình ảnh gốc do ACCESSTRADE cấp",
  "Không đặt tên fanpage, tài khoản cá nhân hay tên miền website có chứa cụm từ MB Life",
  "Chủ động gỡ bỏ bài đăng vi phạm trong vòng 24 giờ kể từ lúc nhận thông báo yêu cầu",
  "Mọi bài viết, hình ảnh tự thiết kế phải gửi qua ACCESSTRADE duyệt trước khi đăng công khai",
];

export const CLAIM_STEPS = [
  { title: "Chuẩn bị bộ chứng từ", text: "Gồm giấy ra viện, tóm tắt bệnh án, đơn thuốc có ghi chẩn đoán và đóng dấu bệnh viện, hóa đơn tài chính, bảng kê chi tiết viện phí và ảnh chụp thẻ BHYT. Nếu yêu cầu bồi thường lần đầu, khách cần chụp thêm ảnh lịch sử khám chữa bệnh 2 năm gần nhất trên app VNeID hoặc VssID." },
  { title: "Nộp hồ sơ trên app MB Life Style", text: "Vào mục Giải quyết quyền lợi, tải ảnh chứng từ lên và chọn phương thức nhận tiền chuyển khoản ngay trên ứng dụng. Thời hạn nộp hồ sơ là trong vòng 1 năm kể từ đợt điều trị." },
  { title: "Chờ nhận kết quả", text: "Hồ sơ được Công ty CP Insmart (đơn vị ủy quyền của MB Life) thẩm định và phản hồi kết quả qua SMS trong vòng 30 ngày kể từ lúc nhận đủ chứng từ." },
];

export const REJECT_REASONS = [
  ["Không phải điều trị nội trú", "Chỉ khám ngoại trú, hoặc thời gian nằm viện chưa qua 12 giờ đêm và chưa đủ 12 tiếng"],
  ["Sai cơ sở y tế", "Điều trị tại bệnh viện tư nhân, quốc tế, bệnh viện y học cổ truyền, phục hồi chức năng hoặc tâm thần"],
  ["Không sử dụng BHYT", "Đi khám không xuất trình thẻ BHYT, hoặc đợt điều trị đó nằm ngoài diện BHYT chi trả"],
  ["Đi trái tuyến sai quy định", "Bệnh thông thường nhưng khách tự vượt tuyến từ cấp ban đầu lên thẳng cấp chuyên sâu"],
  ["Chưa qua thời gian chờ", "Sự kiện xảy ra trong 30 ngày đầu với bệnh thường, hoặc 90 ngày đầu với bệnh hiểm nghèo và bệnh đặc biệt"],
  ["Khai báo sức khỏe thiếu trung thực", "Đã mắc bệnh từ trước khi mua nhưng không kê khai hoặc khai sai sự thật"],
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
Lưu ý nhỏ: khi đăng ký online cần bố hoặc mẹ ngồi cùng con để hệ thống quét khuôn mặt xác thực cả 2 người.
Xem biểu phí theo tuổi của bé tại đây: [link]` },
];
