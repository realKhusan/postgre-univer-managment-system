const { Router } = require("express");
const {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getByInstructor,
} = require("../controllers/courses");
const router = Router();

router.get("/all", getCourses);
router.get("by-instructor/:instructor", getByInstructor);
router.get("/by-number/:number", getByInstructor);
router.post("/add", createCourse);
router.put("/edit/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);

module.exports = router;
