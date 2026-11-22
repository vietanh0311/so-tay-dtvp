// Điền giá trị thật trước khi đưa lên
export const CONFIG = {
  campaignUrl: "https://pub2.accesstrade.vn/campaign-v2/B%E1%BA%A3o%20hi%E1%BB%83m%20MB%20Life%20-%20CPS%20Website--7041410167338139054", // link đăng ký chiến dịch trên ACCESSTRADE (pub2)
  supportLabel: "Account ACCESSTRADE phụ trách chiến dịch", // kênh nhận câu hỏi mới
  lastUpdated: "13/11/2026",
  status: "", // để trống khi đã duyệt
  hotline: "(024) 222 9 8888", // theo brochure, chờ MB Life xác nhận
  // Bản nén 720p/CRF28 (~4.5MB) của MBLIFE - ĐIỂM TỰA VIỆN PHÍ.mp4, tự host trong assets/video.
  productVideoUrl: "/assets/video/diem-tua-vien-phi.mp4",
  // Link mua trực tiếp cho khách không phải publisher/CTV
  customerBuyUrl: "https://diemtuavienphi.mblife.vn/?utm_source=accesstrade&aff_sid=H40JKAgyQbI6Zpn6OeeYlKCBXlcIYLc4IirgH21794554316&atnct1=4ecb679fd35dcfd0f0894c399590be1a&atnct2=H40JKAgyQbI6Zpn6OeeYlKCBXlcIYLc4IirgH21794554316&atnct3=GU6Go000f1q0048xk",

  // --- Trang khảo sát /khao-sat ---
  // URL web app sau khi deploy apps-script/khao-sat-webapp.gs (xem hướng dẫn trong file đó). Để trống thì trang vẫn chạy nhưng không gửi được dữ liệu.
  surveyScriptUrl: "https://script.google.com/macros/s/AKfycbyNb4zIn_UfUKLlWfUUQj3vpQItpSxlYS5nnsd1YKGFWjo388u98PCx1PxKr2l2ktjKHQ/exec",
  // ID video YouTube tóm tắt dùng ở Phần C (chỉ lấy phần ID sau watch?v=). Ưu tiên nếu có, bỏ qua surveyVideoUrl.
  surveyVideoYoutubeId: "",
  // Video tự host dùng khi không có surveyVideoYoutubeId. Cùng file nén với productVideoUrl.
  surveyVideoUrl: "/assets/video/diem-tua-vien-phi.mp4",
  surveyVideoPoster: "/assets/video/diem-tua-vien-phi-poster.jpg",
};
