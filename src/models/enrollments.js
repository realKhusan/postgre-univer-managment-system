const pool = require("../config/db");

const getAll = async function () {
  const res = await pool.query("SELECT * FROM enrollments");
  return res.rows;
};

const create = async function (enrollment) {
  const res = await pool.query(
    `INSERT INTO enrollments
     (course_id, student_id, enrollment_date)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [enrollment.course_id, enrollment.student_id, enrollment.enrollment_date]
  );
  return res.rows[0];
};
const update = async function (id, enrollment) {
  const res = await pool.query(
    `UPDATE enrollments
     SET course_id = $2,
         student_id = $3,
         enrollment_date = $4,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = $1
     RETURNING *`,
    [
      id,
      enrollment.course_id,
      enrollment.student_id,
      enrollment.enrollment_date,
    ]
  );
  return res.rows[0];
};
const deleteById = async function (id) {
  const res = await pool.query(
    "DELETE FROM enrollments WHERE id = $1 RETURNING *",
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
