// test-db.js
require("dotenv").config(); // Add this at the top
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL); // Debug
  try {
    const client = await pool.connect();
    console.log("Connected to Supabase database!");
    const res = await client.query("SELECT NOW()");
    console.log("Current time:", res.rows[0]);
    client.release();
  } catch (error) {
    console.error("Connection error:", error);
  } finally {
    await pool.end();
  }
}

testConnection();
