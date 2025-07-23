const { Router } = require("express");
const {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");
const router = Router();

router.get("/all", getCourses);
router.post("/add", createCourse);
router.put("/edit/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);

module.exports = router;
