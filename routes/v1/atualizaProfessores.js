const express = require ('express');
const cors = require ('cors');

const { logger } = require ('../../utils');

const { atualizarProfessor } = require('../../services');

const router = express.Router();

router.put('/:id', cors(), async (req, res) => {
    const idProfessor = req.params.id;
    
    try{
        const dados = req.body;
    
        const professor = await atualizarProfessor(dados, idProfessor);

        res.json({
            sucesso: true,
            professor,
        });
    } catch (e) {
        logger.error(`Erro ao atualizar o professor: ${e.message}`);

        res.status(500).json({
            sucesso: false,
            erro: e.message,
        });
    }
});

module.exports = router;
