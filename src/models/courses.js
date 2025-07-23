const pool = require("../config/db");

async function getAll() {
  const res = await pool.query("SELECT * FROM courses ORDER BY id");
  return res.rows;
}

async function create({ name, instructor, schedule, max_students }) {
  const res = await pool.query(
    `INSERT INTO courses
     (name, instructor, schedule, max_students)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, instructor, schedule, max_students]
  );
  return res.rows[0];
}

async function update(id, { name, instructor, schedule, max_students }) {
  const res = await pool.query(
    `UPDATE courses
     SET name = $2,
         instructor = $3,
         schedule = $4,
         max_students = $5,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = $1
     RETURNING *`,
    [id, name, instructor, schedule, max_students]
  );
  return res.rows[0];
}

async function deleteById(id) {
  const res = await pool.query(
    "DELETE FROM courses WHERE id = $1 RETURNING *",
    [id]
  );
  return res.rows[0];
}

module.exports = {
  getAll,
  create,
  update,
  delete: deleteById,
};
