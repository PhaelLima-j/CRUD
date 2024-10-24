const express = require('express');

const buscaProfessorRouter = require('./buscaProfessor');
const criaProfessorRouter = require('./criaProfessores');
const apagaProfessorRouter = require('./apagaProfessores');
const atualizaProfessorRouter = require('./atualizaProfessores');

const router = express.Router();

router.use('/buscaProfessores', buscaProfessorRouter);
router.use('/criaProfessores', criaProfessorRouter);
router.use('/apagaProfessores', apagaProfessorRouter);
router.use('/atualizaProfessores', atualizaProfessorRouter);


module.exports = router;