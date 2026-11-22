// Nội dung khảo sát "Điểm Tựa Viện Phí". Sửa chữ thì sửa ở đây, không viết cứng trong khao-sat.js.
// Đối chiếu với khao-sat-insight-diem-tua-vien-phi.md bản 2 (22/11/2026) trước khi đổi số liệu/điều kiện rẽ nhánh.

export const AGE_OPTIONS = ["Dưới 18", "18-20", "21-25", "26-30", "31-35", "36-40", "41-45", "46-50", "51-55", "56-60", "Trên 60"];

export const FEE_TABLE = {
  "18-20": { std: 310000, adv: 535000 },
  "21-25": { std: 315000, adv: 550000 },
  "26-30": { std: 360000, adv: 625000 },
  "31-35": { std: 380000, adv: 670000 },
  "36-40": { std: 455000, adv: 815000 },
  "41-45": { std: 525000, adv: 955000 },
  "46-50": { std: 760000, adv: 1395000 },
  "51-55": { std: 995000, adv: 1830000 },
  "56-60": { std: 1255000, adv: 2315000 },
};

export const WELCOME = {
  chip: "Khảo sát cộng đồng",
  image: "../assets/img/hero-family-clean.webp",
  imageAlt: "Gia đình bốn người đứng cạnh nhau, vui vẻ trong không gian phòng khám",
  stats: [
    { icon: "clock", value: "3 phút", label: "Toàn câu trắc nghiệm" },
    { icon: "gift", value: "Có quà", label: "Voucher đồ uống" },
    { icon: "lock", value: "Không chào bán", label: "Chỉ để tổng hợp" },
  ],
  title: 'Bạn có bao giờ thắc mắc rằng: "Nếu nằm viện có BHYT thì còn phải trả bao nhiêu?"',
  subtitle: "Chia sẻ 3 phút, nhận mã ưu đãi đồ uống",
  body: "Chào bạn, đây là khảo sát của Cộng đồng hỗ trợ triển khai chương trình Điểm Tựa Viện Phí. Bọn mình muốn biết mọi người đang lo gì về viện phí và nghĩ gì về loại bảo hiểm bổ sung đi kèm BHYT.",
  points: [
    "Toàn bộ là câu trắc nghiệm dễ, sẽ mất khoảng 3 phút, không cần gõ dài.",
    "Cộng đồng có 1 phần quà nho nhỏ là 1 số voucher đồ uống Highlands, The Coffee House, Ding Tea để cảm ơn bạn, voucher sẽ hiện ở cuối sau khi làm xong nhé.",
    "Thông tin chỉ dùng để hỗ trợ phân tích và tổng hợp, tuyệt đối không liên hệ hay chào bán.",
  ],
  cta: "Bắt đầu",
};

export const PRODUCT_INTRO = {
  eyebrow: "Trước khi trả lời tiếp",
  title: "Xem nhanh 45 giây: Điểm Tựa Viện Phí của MB Life",
  lead: "Xem video hoặc đọc nhanh 4 ý dưới đây để trả lời câu hỏi ngay sau.",
  // sơ đồ 2 lớp chi trả, minh họa cho ý đầu tiên bên dưới (không có số liệu riêng)
  layers: {
    title: "Hóa đơn nằm viện nội trú",
    first: { tag: "Lớp 1", label: "Thẻ BHYT", desc: "Trả phần của BHYT trước" },
    second: { tag: "Lớp 2", label: "Điểm Tựa Viện Phí", desc: "MB Life xem xét, chi trả phần còn lại" },
  },
  points: [
    { icon: "layers", text: "Đi cùng thẻ BHYT: khi nằm viện, BHYT trả phần của BHYT trước, sau đó MB Life xem xét và chi trả phần chi phí điều trị nội trú còn lại theo Quy tắc, Điều khoản sản phẩm." },
    { icon: "coin", text: "Phí từ 310.000đ/năm (bản Tiêu chuẩn, khoảng 850đ/ngày) và từ 535.000đ/năm (bản Nâng cao), tăng theo tuổi." },
    { icon: "phone", text: "Không cần khám sức khỏe khi tham gia. Gửi yêu cầu bồi thường qua app MB Life Style." },
    { icon: "hospital", text: "Áp dụng tại cơ sở y tế công lập đủ tiêu chuẩn trên toàn quốc, khi dùng thẻ BHYT đúng quy định. Bản Nâng cao chi trả tối đa 2 tỷ đồng/năm với 60 bệnh hiểm nghèo theo danh mục." },
  ],
  note: "Thông tin tóm tắt để tham khảo. Quyền lợi và điều kiện chi trả theo Quy tắc, Điều khoản sản phẩm do MB Life ban hành.",
  cta: "Đã xem, tiếp tục",
};

// type: single | multi | scale5 | phone
// mỗi option: { label, other?, exclusive?, correct? } - other hiện ô gõ ngắn, exclusive loại trừ các đáp án khác
export const QUESTIONS = [
  // Phần A - Đôi nét về bạn
  { id: "A1", section: "A", type: "single", required: true,
    q: "Bạn đang ở độ tuổi nào?",
    options: AGE_OPTIONS.map((label) => ({ label })) },
  { id: "A2", section: "A", type: "single", required: true,
    q: "Bạn đang sống ở đâu?",
    options: ["Hà Nội", "TP.HCM", "Thành phố, thị xã ở tỉnh khác", "Huyện, xã, vùng nông thôn"].map((label) => ({ label })) },
  { id: "A3", section: "A", type: "single", required: true,
    q: "Công việc hiện tại của bạn?",
    options: ["Nhân viên văn phòng", "Kinh doanh, buôn bán tự do", "Công nhân, lao động phổ thông, tài xế", "Giáo viên, cán bộ, công chức, viên chức", "Học sinh, sinh viên", "Nội trợ, chăm sóc gia đình", "Đã nghỉ hưu", "Khác"]
      .map((label, i) => ({ label, other: i === 7 })) },
  { id: "A4", section: "A", type: "single", required: true,
    q: "Bạn có thẻ BHYT còn hạn không?",
    options: ["Có, công ty hoặc cơ quan đóng", "Có, tự mua hoặc mua theo hộ gia đình", "Có, thẻ học sinh, sinh viên", "Hiện không có", "Không nhớ rõ"].map((label) => ({ label })) },
  { id: "A5", section: "A", type: "multi", required: true,
    q: "Ngoài BHYT, bạn có thêm bảo hiểm sức khỏe nào không?",
    hint: "Chọn nhiều",
    options: ["Chưa có gói nào", "Bảo hiểm sức khỏe công ty mua", "Bảo hiểm sức khỏe tự mua", "Bảo hiểm nhân thọ có kèm quyền lợi nằm viện"]
      .map((label, i) => ({ label, exclusive: i === 0 })) },

  // Phần B - Chuyện đi viện và chi phí
  { id: "B1", section: "B", type: "multi", required: true,
    q: "Trong 2 năm gần đây, nhà bạn có ai phải nằm viện không?",
    hint: "Chọn nhiều",
    options: ["Bản thân mình", "Bố mẹ (nội, ngoại)", "Vợ hoặc chồng", "Con", "Trộm vía chưa ai phải nằm viện"]
      .map((label, i) => ({ label, exclusive: i === 4 })) },
  { id: "B2", section: "B", type: "single", required: true,
    q: "Lần nằm viện gần nhất, sau khi BHYT trả, nhà bạn vẫn tự bỏ ra khoảng bao nhiêu?",
    hideIf: (a) => Array.isArray(a.B1) && a.B1.length === 1 && a.B1[0] === "Trộm vía chưa ai phải nằm viện",
    options: ["Dưới 2 triệu", "2-10 triệu", "10-30 triệu", "Trên 30 triệu", "Không nhớ"].map((label) => ({ label })) },
  { id: "B3", section: "B", type: "multi", required: true,
    q: "Lúc đó nhà bạn xoay khoản tiền này từ đâu?",
    hint: "Chọn nhiều",
    hideIf: (a) => Array.isArray(a.B1) && a.B1.length === 1 && a.B1[0] === "Trộm vía chưa ai phải nằm viện",
    options: ["Tiền tiết kiệm, tiền sinh hoạt", "Người thân, bạn bè hỗ trợ hoặc cho mượn", "Bảo hiểm khác trả lại", "Vay ngân hàng, thẻ tín dụng, app vay", "Khác"]
      .map((label, i) => ({ label, other: i === 4 })) },
  { id: "B4", section: "B", type: "single", required: true,
    q: "Theo bạn, có thẻ BHYT rồi thì khi nằm viện còn phải tự trả thêm nhiều không?",
    options: ["Gần như không phải trả thêm", "Chỉ trả thêm một khoản nhỏ", "Vẫn phải trả thêm khá nhiều (thuốc ngoài danh mục, vật tư, giường dịch vụ...)", "Mình không rõ"].map((label) => ({ label })) },
  { id: "B5", section: "B", type: "multi", required: true,
    q: "Nếu ngày mai bạn hoặc người nhà phải nằm viện 1 tuần, bạn lo nhất điều gì?",
    hint: "Chọn tối đa 2",
    maxSelect: 2,
    options: ["Tiền viện phí, thuốc men vượt quá tiền có sẵn", "Mất thu nhập những ngày nghỉ làm", "Không có người trông ở viện", "Thủ tục bệnh viện, BHYT rắc rối, chờ lâu", "Không biết bệnh viện nào tốt, khám đâu", "Không lo gì nhiều", "Khác"]
      .map((label, i) => ({ label, other: i === 6 })) },

  // Phần C - Loại bảo hiểm đi cùng thẻ BHYT
  { id: "C1", section: "C", type: "single", required: true,
    q: "Trước khi xem, bạn đã nghe tới loại bảo hiểm đi kèm để trả phần BHYT chưa trả như thế này chưa?",
    options: ["Đã nghe tên Điểm Tựa Viện Phí của MB Life", "Đã nghe gói tương tự của bên khác", "Lần đầu mình nghe"].map((label) => ({ label })) },
  { id: "C2", section: "C", type: "single", required: true,
    q: "Theo bạn hiểu, Điểm Tựa Viện Phí chi trả trong trường hợp nào?",
    options: [
      { label: "Đi khám ngoại trú rồi lấy thuốc về trong ngày" },
      { label: "Khi phải nằm viện, trả phần viện phí còn lại sau khi BHYT đã trả", correct: true },
      { label: "Dùng thay thẻ BHYT khi không có thẻ" },
      { label: "Mình chưa rõ lắm" },
    ] },
  { id: "C3", section: "C", type: "scale5", required: true,
    q: "Bạn quan tâm tới sản phẩm này ở mức nào?",
    scaleMin: "Chưa quan tâm", scaleMax: "Rất quan tâm" },
  { id: "C4", section: "C", type: "single", required: true,
    q: "Bạn thấy mức phí này thế nào?",
    hideIf: (a) => a.A1 === "Trên 60",
    feeFromA1: true,
    options: ["Rẻ so với quyền lợi", "Hợp lý, vừa túi tiền", "Hơi cao", "Đắt"].map((label) => ({ label })) },
  { id: "C5", section: "C", type: "multi", required: true,
    q: "Điểm nào ở sản phẩm làm bạn thấy ưng nhất?",
    hint: "Chọn tối đa 2",
    maxSelect: 2,
    options: ["Phí hằng năm thấp", "Tham gia nhanh, không phải khám sức khỏe", "Đỡ lo nếu bố mẹ lớn tuổi phải nằm viện", "Hạn mức cao (tới 2 tỷ) khi mắc bệnh hiểm nghèo", "Dùng được ở bệnh viện công gần nhà", "Gửi bồi thường qua app, đỡ đi lại", "Tin thương hiệu MB", "Chưa thấy điểm nào thuyết phục"]
      .map((label) => ({ label })) },
  { id: "C6", section: "C", type: "single", required: true,
    q: "Câu nhỏ để kiểm tra trang hiển thị đúng: bạn chọn ô \"Đồng ý\" giúp bọn mình nhé.",
    options: [
      { label: "Không đồng ý" },
      { label: "Bình thường" },
      { label: "Đồng ý", correct: true },
    ] },
  { id: "C7", section: "C", type: "multi", required: true,
    q: "Điều gì làm bạn còn lăn tăn khi nghĩ tới việc tham gia?",
    hint: "Chọn tối đa 2",
    maxSelect: 2,
    options: ["Sợ lúc nằm viện thật thì khó được bồi thường", "Chỉ áp dụng ở bệnh viện công", "Phải đúng tuyến BHYT mới được trả", "Phải chờ 30-90 ngày sau khi mua mới được trả", "Vẫn e dè với công ty bảo hiểm nói chung", "Đã có bảo hiểm sức khỏe khác đủ dùng", "Thấy sức khỏe đang tốt, chưa cần", "Không biết mua thế nào, hỏi ai", "Khác"]
      .map((label, i) => ({ label, other: i === 8 })) },
  { id: "C8", section: "C", type: "single", required: true,
    q: "Bạn định thế nào với sản phẩm này?",
    options: ["Sẽ tham gia trong 1 tháng tới", "Khá thích, muốn tìm hiểu kỹ thêm rồi quyết", "Hiện chưa có nhu cầu"].map((label) => ({ label })) },
  { id: "C9", section: "C", type: "multi", required: true,
    q: "Nếu tham gia, bạn muốn bảo vệ ai trước?",
    hint: "Chọn nhiều",
    qIf: (a) => (a.C8 === "Hiện chưa có nhu cầu" ? "Giả sử sau này tham gia, bạn sẽ ưu tiên bảo vệ ai trước?" : null),
    options: ["Bản thân mình", "Bố mẹ hai bên", "Vợ hoặc chồng", "Con", "Chưa nghĩ tới ai"].map((label) => ({ label })) },
  { id: "C10", section: "C", type: "single", required: true,
    q: "Với gói phí nhỏ như thế này, bạn thích tham gia qua đâu nhất?",
    options: ["Tự mua online qua link, vài phút là xong", "Nhờ người quen hiểu về bảo hiểm tư vấn rồi mua qua họ", "Tại quầy ngân hàng MB", "Qua ví điện tử (MoMo, ZaloPay, Viettel Money...)", "Trên app MB hoặc MB Life", "Tại quầy trong bệnh viện"].map((label) => ({ label })) },
  { id: "C11", section: "C", type: "multi", required: false,
    q: "Bạn muốn hỏi thêm điều gì trước khi quyết định?",
    hint: "Chọn nhiều, không bắt buộc",
    note: "Muốn hỏi trực tiếp thì vào nhóm Zalo hỏi đáp ở trang cuối.",
    options: ["Nằm viện xong bao lâu thì nhận được tiền", "Cần giấy tờ gì để gửi bồi thường", "Bệnh viện nào gần nhà mình được áp dụng", "Đang có bệnh sẵn thì có tham gia được không", "Mua cho bố mẹ ở xa thế nào", "Khác với bảo hiểm sức khỏe công ty mua ra sao", "Mình đã rõ, không cần hỏi thêm", "Khác"]
      .map((label, i) => ({ label, other: i === 7 })) },

  // Phần D - Bước cuối trước khi lấy mã
  { id: "D1", section: "D", type: "phone", required: false,
    q: "Bọn mình đang tìm vài người để nói chuyện thêm khoảng 10 phút qua điện thoại. Cuộc gọi chỉ để nghe góp ý, không tư vấn bán hàng. Bạn có sẵn lòng không?",
    consent: "Tôi đồng ý để Cộng đồng hỗ trợ triển khai chương trình Điểm Tựa Viện Phí (đội ACCESSTRADE) liên hệ qua số này, chỉ để phỏng vấn về khảo sát.",
    options: [{ label: "Có" }, { label: "Chưa tiện, cho mình lấy mã luôn" }] },
];

export const SECTION_LABEL = {
  A: "Phần A · Đôi nét về bạn",
  B: "Phần B · Chuyện đi viện và chi phí",
  C: "Phần C · Loại bảo hiểm đi cùng BHYT",
  D: "Phần D · Bước cuối",
};

// 4 mốc trên thanh tiến độ: icon + tên ngắn
export const SECTION_META = {
  A: { icon: "user", short: "Về bạn" },
  B: { icon: "hospital", short: "Đi viện" },
  C: { icon: "shield", short: "Bảo hiểm" },
  D: { icon: "phone", short: "Bước cuối" },
};

export const THANK_YOU = {
  chip: "Hoàn tất",
  title: "Cảm ơn bạn đã dành 3 phút chia sẻ.",
  lead: "Mã ưu đãi của bạn ở nút đầu tiên bên dưới.",
  footnote: "Ai cũng có thể đăng ký làm cộng tác viên, chia sẻ link và nhận hoa hồng khi người quen tham gia.",
};

export const THANK_YOU_MINOR = {
  title: "Cảm ơn bạn đã quan tâm.",
  lead: "Khảo sát này dành cho người từ 18 tuổi trở lên, hẹn bạn ở chương trình sau nhé.",
};

export const ACTION_BUTTONS = [
  { id: 1, icon: "gift", label: "Lấy mã ưu đãi", desc: "Highlands, The Coffee House, Ding Tea", url: "https://dealverse.eps.io.vn/" },
  { id: 2, icon: "shield", label: "Tìm hiểu và tham gia Điểm Tựa Viện Phí", desc: "Quyền lợi, biểu phí, đăng ký trực tiếp", url: "https://diemtuavienphi.mblife.vn/?utm_source=accesstrade&aff_sid=Tpri7SfQyIrUXcDN57hB8zRqATDnFrKHmszTkJ1795327672&atnct1=4ecb679fd35dcfd0f0894c399590be1a&atnct2=Tpri7SfQyIrUXcDN57hB8zRqATDnFrKHmszTkJ1795327672&atnct3=LTlZY000f1q0048xk" },
  { id: 3, icon: "zalo", label: "Vào nhóm Zalo hỏi đáp", desc: "Hỏi trực tiếp về sản phẩm", url: "https://zalo.me/g/7l9g8mjir6soitvlfqr4" },
  { id: 4, icon: "share", label: "Giới thiệu cho người quen", desc: "Nhận hoa hồng khi người quen tham gia", url: "https://camnangdiemtuavienphi.accesstrade.work/" },
];

export const FOOTER_NOTE = "Cộng đồng hỗ trợ triển khai chương trình Điểm Tựa Viện Phí do ACCESSTRADE vận hành. Điểm Tựa Viện Phí là sản phẩm bảo hiểm của MB Life. Thông tin khảo sát chỉ dùng để tổng hợp; số Zalo (nếu có) chỉ dùng để liên hệ phỏng vấn.";
