const professor = require('../model/professor');

const inserirProfessor = (async (dadosProfessor) => {

    const result = professor.criaProfessor(dadosProfessor);

    if (result)
        return true;
    else
        return false;
});

module.exports = inserirProfessor;
