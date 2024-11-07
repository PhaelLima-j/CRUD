const inserirProfessor = (async (dadosProfessor) => {
    const professor = require('../model/professor');

    const result = professor.criaProfessor(dadosProfessor);

    if (result)
        return true;
    else
        return false;
});

module.exports = inserirProfessor;
