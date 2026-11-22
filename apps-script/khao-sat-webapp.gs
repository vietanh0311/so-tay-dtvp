// Backend cho trang /khao-sat - nhận dữ liệu khảo sát và ghi vào Google Sheet.
//
// CÁCH DEPLOY (làm 1 lần):
// 1. Tạo một Google Sheet mới, ví dụ đặt tên "Khảo sát Điểm Tựa Viện Phí - Dữ liệu".
// 2. Trong sheet đó: menu Tiện ích mở rộng > Apps Script.
// 3. Xóa hết code mẫu (myFunction...), dán toàn bộ nội dung file này vào.
// 4. Bấm biểu tượng Lưu (hoặc Ctrl/Cmd+S).
// 5. Bấm nút "Triển khai" (Deploy) > "Triển khai mới" (New deployment).
//    - Chọn loại: "Ứng dụng web" (Web app).
//    - Người thực thi (Execute as): Tôi (chủ tài khoản).
//    - Người có quyền truy cập (Who has access): Mọi người (Anyone).
// 6. Bấm "Triển khai", cho phép (Authorize) khi Google hỏi quyền truy cập Sheet.
// 7. Copy URL dạng https://script.google.com/macros/s/..../exec, dán vào
//    assets/js/config.js, khóa surveyScriptUrl.
//
// MỖI LẦN SỬA CODE Ở ĐÂY: phải vào "Triển khai > Quản lý các bản triển khai"
// > bấm sửa (icon bút) > "Phiên bản" chọn "Phiên bản mới" > Triển khai lại.
// Sửa code mà không làm bước này thì bản web app đang chạy KHÔNG đổi theo.
//
// Sheet "Trả lời": mỗi lượt khảo sát hoàn thành là 1 dòng, cột tự mở rộng theo dữ liệu gửi lên.
// Sheet "Sự kiện": mỗi dòng là 1 sự kiện (mở trang, bắt đầu, xong từng phần, nộp, bấm nút 1-4).

function doPost(e) {
  const params = e && e.parameter ? e.parameter : {};
  const sheetName = params.sheet === "events" ? "Sự kiện" : "Trả lời";
  const data = Object.assign({}, params);
  delete data.sheet;
  appendRow_(getOrCreateSheet_(sheetName), data);
  return ContentService.createTextOutput("ok");
}

function doGet() {
  return ContentService.createTextOutput("Khao sat Diem Tua Vien Phi - webapp dang chay.");
}

function getOrCreateSheet_(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

// Ghi 1 dòng dữ liệu, tự thêm cột mới vào cuối nếu dữ liệu gửi lên có field chưa từng thấy
// (ví dụ lần đầu có người gõ chữ ở ô "Khác" của một câu nào đó).
function appendRow_(sheet, data) {
  let headers;
  if (sheet.getLastRow() === 0) {
    headers = Object.keys(data);
    sheet.appendRow(headers);
  } else {
    headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const missing = Object.keys(data).filter((k) => headers.indexOf(k) === -1);
    if (missing.length) {
      headers = headers.concat(missing);
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
  }
  sheet.appendRow(headers.map((h) => (data[h] !== undefined ? data[h] : "")));
}
