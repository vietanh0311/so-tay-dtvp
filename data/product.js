// Nguồn: slide đào tạo MB Life, website MB Life, webinar 11/11/2026, Brochure A5.pdf MB Life (biểu phí 61-65 tuổi, đối chiếu 13/11/2026)

export const PRICING = [
  { age: "6-20", min: 6, max: 20, std: 310000, adv: 535000 },
  { age: "21-25", min: 21, max: 25, std: 315000, adv: 550000 },
  { age: "26-30", min: 26, max: 30, std: 360000, adv: 625000 },
  { age: "31-35", min: 31, max: 35, std: 380000, adv: 670000 },
  { age: "36-40", min: 36, max: 40, std: 455000, adv: 815000 },
  { age: "41-45", min: 41, max: 45, std: 525000, adv: 955000 },
  { age: "46-50", min: 46, max: 50, std: 760000, adv: 1395000 },
  { age: "51-55", min: 51, max: 55, std: 995000, adv: 1830000 },
  { age: "56-60", min: 56, max: 60, std: 1255000, adv: 2315000 },
  { age: "61-65", min: 61, max: 65, std: 1710000, adv: 3150000, renewOnly: true },
];

export const COMMISSION = { min: 0.17, max: 0.2 };

export const PLANS = [
  {
    id: "std",
    name: "Bản Tiêu chuẩn",
    from: 310000,
    limit: "100 triệu/năm",
    points: [
      "Trả phần viện phí còn lại sau BHYT trong danh mục BHYT, áp dụng cho mọi bệnh khi nằm nội trú",
      "Không áp dụng thời gian chờ với tai nạn và các năm tái tục",
      "Dùng được tại toàn bộ cơ sở y tế công lập trên cả nước",
    ],
    fit: "Phù hợp với sinh viên, lao động phổ thông, người lần đầu mua bảo hiểm, ngân sách dưới 400k/năm",
  },
  {
    id: "adv",
    name: "Bản Nâng cao",
    badge: "Phổ biến nhất",
    from: 535000,
    limit: "2 tỷ/năm",
    points: [
      "Bao gồm toàn bộ quyền lợi của bản Tiêu chuẩn",
      "Trả thêm chi phí ngoài phạm vi BHYT khi điều trị 1 trong 60 bệnh hiểm nghèo",
      "Lưu ý: nếu điều trị bệnh hiểm nghèo mà nằm phòng nâng cao (giá giường vượt quá 150% mức BHYT), quyền lợi chỉ chi trả 30%",
    ],
    fit: "Phù hợp với người có thu nhập ổn định, gia đình từng có tiền sử bệnh hiểm nghèo, ngân sách trên 500k/năm",
  },
];

export const WAITING = [
  { days: "0", unit: "ngày", label: "Nằm viện do tai nạn" },
  { days: "30", unit: "ngày", label: "Bệnh tật, thương tích thông thường" },
  { days: "90", unit: "ngày", label: "Bệnh hiểm nghèo và 7 nhóm bệnh đặc biệt: thoát vị, u lành, lao và hen, trĩ, amidan/VA, mũi xoang, tuyến giáp" },
];

export const ELIGIBLE = {
  yes: [
    "Người được bảo hiểm từ 6-60 tuổi, được tái tục đến năm 65 tuổi",
    "Người đứng tên mua và thanh toán từ 18 tuổi trở lên",
    "Đang sở hữu thẻ BHYT còn hiệu lực",
  ],
  no: [
    "Người chưa có thẻ BHYT: hệ thống sẽ chặn ngay bước kê khai",
    "Người trên 60 tuổi muốn tham gia mới lần đầu",
    "Người đang trong quá trình điều trị bệnh",
    "Khách hàng đến từ kênh đại lý bảo hiểm hoặc các trang so sánh giá bảo hiểm",
  ],
};

// Ca chị Th. trên website MB Life
export const BILL_CASE = {
  title: "Chị Th., 34 tuổi, nhân viên văn phòng",
  meta: "Ung thư cổ tử cung tại BV K · đúng tuyến · đã qua 90 ngày chờ · phòng tiêu chuẩn · bản Nâng cao",
  rows: [
    { label: "Tổng viện phí nội trú", value: 137 },
    { label: "BHYT thanh toán 80%", value: -98, sub: true },
    { label: "Đồng chi trả 20%", value: 24, sub: true },
    { label: "Thuốc đích ngoài danh mục BHYT", value: 15, sub: true },
  ],
  without: 39,
  with: 0,
  note: "39 triệu tương đương khoảng 2,6 tháng lương của chị Th. Đây là tình huống minh họa, quyền lợi chi trả thực tế áp dụng theo Quy tắc và điều khoản sản phẩm.",
};

export const HERO_STATS = [
  { value: "95,2%", label: "người Việt đã sở hữu thẻ BHYT", src: "slide", icon: "shield" },
  { value: "43%", label: "là phần tự bỏ tiền túi", src: "slide", icon: "hospital" },
  { value: "17-20%", label: "tương đương khoảng 60k trên 1 hợp đồng thành công", icon: "calc" },
  { value: "310k", label: "mức phí thấp nhất mỗi năm", icon: "doc" },
];

// So sánh với bảo hiểm sức khỏe thông thường trên thị trường, không nêu tên hãng cụ thể
// Nguồn: slide đào tạo MB Life (câu hỏi "khác gì với BHYT nhà nước") + nhận định chung của sản phẩm bảo hiểm sức khỏe trên thị trường
export const COMPARE = {
  note: "Nhắc lại để nhớ kỹ: đây là lớp trả sau BHYT, không thay thế BHYT. Không có thẻ BHYT thì không mua và không dùng được.",
  rows: [
    {
      label: "Cách hoạt động",
      normal: "Chạy độc lập, tự tính quyền lợi riêng, không cần có BHYT",
      dtvp: "Trả nốt phần viện phí còn lại sau khi BHYT đã thanh toán",
    },
    {
      label: "Nơi điều trị",
      normal: "Dùng được ở cả bệnh viện tư, bệnh viện quốc tế",
      dtvp: "Chỉ áp dụng tại bệnh viện công lập",
    },
    {
      label: "Điều kiện kích hoạt",
      normal: "Không ràng buộc theo thẻ BHYT",
      dtvp: "Phải đi đúng tuyến, thẻ BHYT còn hiệu lực, chi phí bồi thường trên 100.000đ",
    },
    {
      label: "Mức phí",
      normal: "Từ vài triệu đến vài chục triệu đồng mỗi năm",
      dtvp: "Từ 310.000đ/năm",
    },
  ],
};
