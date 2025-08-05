const model = require("../models/courses");

async function getCourses(req, res, next) {
  try {
    const courses = await model.getAll();
    res.json(courses);
  } catch (err) {
    next(err);
  }
}
async function getByInstructor(req, res, next) {
  try {
    const courses = await model.getByInstructor(req.params.instructor);
    res.json(courses);
  } catch (err) {
    next(err);
  }
}
async function getBySpecifiedNumber(req, res, next) {
  try {
    const courses = await model.getBySpecifiedNumber(req.params.number);
    res.json(courses);
  } catch (err) {
    next(err);
  }
}
async function createCourse(req, res, next) {
  try {
    const newCourse = await model.create(req.body);
    res.status(201).json(newCourse);
  } catch (err) {
    next(err);
  }
}

async function updateCourse(req, res, next) {
  try {
    const updated = await model.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Course not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteCourse(req, res, next) {
  try {
    const removed = await model.delete(req.params.id);
    if (!removed) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted", course: removed });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getCourses,
  getByInstructor,
  getBySpecifiedNumber,
  createCourse,
  updateCourse,
  deleteCourse,
};
