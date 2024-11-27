const pool = require("./pool")

async function getAllData() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertData(data) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [data])}

  module.exports = {
    getAllData,
    insertData,
  }