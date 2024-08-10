const express = require('express');
const router = express.Router();
const { GetStudentResult } = require('../Control/quizController');

// Define the POST route for student results
router.post('/student-result', GetStudentResult);

module.exports = router;
