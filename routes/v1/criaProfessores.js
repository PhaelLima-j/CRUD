const express = require('express');
const cors = require ('cors');

const { inserirProfessor } = require ('../../services');

const { logger } = require ('../../utils');


const router = express.Router();

router.post('/professor', cors(), async (req, res) => {
    const dados = req.body;

    try{
        const professor = await inserirProfessor(dados);
            
        res.json({
            sucesso: true,
            professor,
        });
    } catch (e) {
        logger.error(`Erro na criação do professor: ${e.message}`);
    
        res.status(500).json({
            sucesso: false,
            erro: e.message,
        });
    }
});

module.exports = router