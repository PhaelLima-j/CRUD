const professor = require('../model/professor');

const deletarProfessor = (async (id) => {
    
    const result = await professor.deletaProfessor(id);

    if (result)
        return true;
    else
        return false;
});

module.exports = deletarProfessor;