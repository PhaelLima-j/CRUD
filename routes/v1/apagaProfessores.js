const express = require ('express');
const { PrismaClient } = require('@prisma/client'); 

const { logger } = require('../../utils');
const { apagaProfessor } = require('../../services');

const prisma = new PrismaClient();
const router = express.Router();

router.delete('/:id', async (req, res) => {
    const professorId = req.params.id;

    try {
        const professor = await apagaProfessor(professorId)

        res.json({
            sucesso: true,
        });
    } catch (e) {
        logger.error(`Erro ao apagar as informaçãoes do professor: ${e.message}`);

        res.status(422).json({
            sucesso: false,
            erro: e.message,
        });
    }
});

module.exports = router;