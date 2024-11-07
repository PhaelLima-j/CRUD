const express = require('express');

const buscaProfessorRouter = require('./buscaProfessor');
const apagaProfessorRouter = require('./apagaProfessores');
const criaProfessorRouter = require('./criaProfessores');
const atualizaProfessorRouter = require('./atualizaProfessores');

const router = express.Router();

router.use('/projeto-escolar', buscaProfessorRouter);
router.use('/projeto-escolar', apagaProfessorRouter);
router.use('/projeto-escolar', criaProfessorRouter);
router.use('/projeto-escolar', atualizaProfessorRouter);


module.exports = router;