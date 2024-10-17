const express = require('express');

const { buscaProfesores } = require ('../../services');

const { logger } = require ('../../utils');

const router = express.Router();

router.get('/', async (_req, res) => {
    try{
        const professores = await buscaProfesores();
        
        res.json({
            sucesso: true,
            professores,
        });
    } catch (e) {
        logger.error(`Erro ao buscar os professores: ${e.message}`);

        res.status(500).json({
            sucesso: false,
            erro: e.message,
        });
    }
});

module.exports = router;