// Almasa Signs — contact form -> Google Sheets
// Sheet: https://docs.google.com/spreadsheets/d/1EUhZwFuptNhd_tE29-9Q0GCFWmoCxUatFxbMNxh21jY/edit
//
// SETUP
// 1. Open the sheet above.
// 2. Extensions -> Apps Script. Delete any existing code and paste this whole file.
// 3. Run the function "setupHeaders" once (toolbar Run). Approve the permission prompt.
// 4. Deploy -> New deployment -> type "Web app".
//      - Execute as: Me
//      - Who has access: Anyone
//    Click Deploy, copy the Web app URL.
// 5. Paste that URL into SHEET_ENDPOINT in index.html.

const SHEET_ID = '1EUhZwFuptNhd_tE29-9Q0GCFWmoCxUatFxbMNxh21jY';
const SHEET_NAME = 'Sheet1'; // change if your tab has a different name

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.appendRow([
      new Date(),
      data.name    || '',
      data.company || '',
      data.email   || '',
      data.phone   || '',
      data.service || '',
      data.message || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Run this once to label the columns.
function setupHeaders() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  sheet.getRange(1, 1, 1, 7)
    .setValues([['Timestamp', 'Name', 'Company', 'Email', 'Phone', 'Service', 'Message']])
    .setFontWeight('bold');
}
