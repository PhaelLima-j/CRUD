const express = require('express');

const buscaProfessorRouter = require('./buscaProfessor');

const router = express.Router();

router.use('/buscaProfessores', buscaProfessorRouter);


module.exports = router;