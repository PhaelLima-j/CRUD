const express = require ('express');

const { apagaProfessor } = require('../../services');

const { logger } = require('../../utils');

const router = express.router();

router.delete('/', async (req, res) => {
    const professorId = parseInt(req.params.id);
    
    try {
        const professor = await prisma.tbl_professor.findUnique({
            where: { id: professorId }
        });

        if(!professor){
            throw new Error('Não existe um professor com esse identificador');
        }

        await prisma.tbl_professor.delete({
            where: { id: professorId }
        });

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