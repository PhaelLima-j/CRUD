const professor = require('../model/professor');

const atualizarProfessor = (async (dadosProfessor, id) => {
    
    const idProfessor = id;
    dadosProfessor.id = idProfessor;

    const result = await professor.atualizaProfessor(dadosProfessor);

    if (result)
        return true;
    else
        return false;
});

module.exports = atualizarProfessor;