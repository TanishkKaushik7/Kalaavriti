// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

async function getProducts() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(fs.readFileSync('google-credentials.json')), // your service account key
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!A2:N', // adjust if you name your sheet differently
  });

  const rows = res.data.values;

  if (!rows || rows.length === 0) return [];

return rows.map(([id, name, price, image, description, category, artisan, rating, reviews, originalPrice, isFeatured, isNew, badge, inStock]) => ({
  id,
  name,
  price: Number(price),
  image,
  description,
  category,
  artisan,
  rating: Number(rating),
  reviews: Number(reviews),
  originalPrice: Number(originalPrice),
  isFeatured: isFeatured === 'TRUE',
  isNew: isNew === 'TRUE',
  badge,
  inStock: inStock === 'TRUE',
}));

}

app.get('/api/products', async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching products');
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
