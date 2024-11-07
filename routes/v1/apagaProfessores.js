const express = require ('express');
const cors = require('cors');

const { logger } = require('../../utils');

const { deletarProfessor } = require('../../services');

const router = express.Router();

router.delete('/professor/:id', cors(), async (req, res) => {
    const professorId = req.params.id;

    try {
        const professor = await deletarProfessor(professorId);

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