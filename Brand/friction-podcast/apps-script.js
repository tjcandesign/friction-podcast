// Paste this into Extensions > Apps Script in the Friction Podcast Subscriptions sheet
// Then Deploy > New Deployment > Web App > Anyone can access > Deploy
// Copy the URL and give it to TJ

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.email,
    new Date().toISOString(),
    data.source || 'website'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Friction Podcast subscription endpoint' }))
    .setMimeType(ContentService.MimeType.JSON);
}
