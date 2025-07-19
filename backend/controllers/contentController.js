const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: "config/credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets.readonly",
});

const SHEET_ID = process.env.SHEET_ID;

const getAllContent = async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    const range = 'Sheet1!A2:B'; // Assumes first row is headers

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range,
    });

    const rows = response.data.values;
    const formatted = rows.map(([title, description]) => ({ title, description }));
    res.json(formatted);
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).json({ message: 'Failed to fetch content' });
  }
};

module.exports = { getAllContent };