const { Router } = require("express");
const {
  getEnrollments,
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
} = require("../controllers/enrollments");

const router = Router();
router.get("/all", getEnrollments);
router.post("/add", createEnrollment);
router.put("/edit/:id", updateEnrollment);
router.delete("/delete/:id", deleteEnrollment);
module.exports = router;
