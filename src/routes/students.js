const { Router } = require("express");
const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentsInRange,
  getStudentsByCount,
} = require("../controllers/students");

const router = Router();
router.get("/all", getStudents);
router.get("/students-in-range", getStudentsInRange);
router.get("/students-with-min/:count", getStudentsByCount);
router.post("/add", createStudent);
router.put("/edit/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);

module.exports = router;
