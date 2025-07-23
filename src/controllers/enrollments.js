const model = require("../models/enrollments");

const getEnrollments = async function (req, res, next) {
  try {
    const enrollments = await model.getAll();
    res.json(enrollments);
  } catch (err) {
    next(err);
  }
};

const createEnrollment = async function (req, res, next) {
  try {
    const newEnrollment = await model.create(req.body);
    res.status(201).json(newEnrollment);
  } catch (err) {
    next(err);
  }
};

const updateEnrollment = async function (req, res, next) {
  try {
    const updated = await model.update(req.params.id, req.body);
    if (!updated)
      return res.status(404).json({ error: "Enrollment not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const deleteEnrollment = async function (req, res, next) {
  try {
    const removed = await model.delete(req.params.id);
    if (!removed)
      return res.status(404).json({ error: "Enrollment not found" });
    res.json({ message: "Enrollment deleted", enrollment: removed });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getEnrollments,
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
};
