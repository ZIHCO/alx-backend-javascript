import StudentsController from '../controllers/StudentsController.js';
import AppController from '../controllers/AppController.js';

const express = require('express');

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
