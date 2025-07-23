const models = require("../models/students");

const getStudents = async (req, res) => {
  try {
    const students = await models.getAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const newStudent = await models.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await models.update(req.params.id, req.body);
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await models.deleteById(req.params.id);
    res.status(200).json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
