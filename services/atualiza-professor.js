
const atualizarProfessor = (async (dadosProfessor, id) => {
    
    const idProfessor = id;

    // ADicionar o id do professor com os dados do json
    dadosProfessor.id = idProfessor

    const result = await professor.updateProfessor
    if (result)
        return true;
    else
        return false;
})

module.exports = atualizarProfessor;