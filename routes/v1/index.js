const express = require('express');

const buscaProfessorRouter = require('./buscaProfessor');
const apagaProfessorRouter = require('./apagaProfessores');
const criaProfessorRouter = require('./criaProfessores');
const atualizaProfessorRouter = require('./atualizaProfessores');

const router = express.Router();

router.use('/buscaProfessores', buscaProfessorRouter);
router.use('/apagaProfessores', apagaProfessorRouter);
router.use('/criaProfessores', criaProfessorRouter);
router.use('/atualizaProfessores', atualizaProfessorRouter);


module.exports = router;