const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

// Crear un curso
router.post('/', coursesController.createCourse);
// Listar cursos
router.get('/', coursesController.getCourses);

module.exports = router;
