const pool = require("../config/db");

const getAll = async function () {
  const res = await pool.query("SELECT * FROM students ORDER BY id");
  return res.rows;
};
const create = async function (student) {
  const res = await pool.query(
    `INSERT INTO students
         (name, major, age)
         VALUES ($1, $2, $3)
         RETURNING *`,
    [student.name, student.major, student.age]
  );
  return res.rows[0];
};
const update = async function (id, student) {
  const res = await pool.query(
    `UPDATE students
     SET name = $2,
         major = $3,
         age = $4,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = $1
     RETURNING *`,
    [id, student.name, student.major, student.age]
  );
  return res.rows[0];
};
const deleteById = async function (id) {
  const res = await pool.query(
    "DELETE FROM students WHERE id = $1 RETURNING *",
    [id]
  );
  return res.rows[0];
};

module.exports = {
  getAll,
  create,
  update,
  delete: deleteById,
};
