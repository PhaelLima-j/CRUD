const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const criaProfessor = async (dadosProfessor) => {
    const sql = `insert into tbl_professor (
                    nome,
                    cpf,
                    data_nascimento,
                    logradouro,
                    bairro,
                    cidade,
                    estado,
                    cep,
                    email
                ) values (
                    '${dadosProfessor.nome}',
                    '${dadosProfessor.cpf}',
                    '${dadosProfessor.data_nascimento}',
                    '${dadosProfessor.logradouro}',
                    '${dadosProfessor.bairro}',
                    '${dadosProfessor.cidade}',
                    '${dadosProfessor.estado}',
                    '${dadosProfessor.cep}',
                    '${dadosProfessor.email}'
                )`; 

    // Executar script
    const result = await prisma.$executeRawUnsafe(sql);

    return !! result;
};

const atualizaProfessor = async (dadosProfessor) => {
    const sql = `update tbl_professor set
                    nome = '${dadosProfessor.nome}',
                    cpf = '${dadosProfessor.cpf}',
                    data_nascimento = '${dadosProfessor.data_nascimento}',
                    logradouro = '${dadosProfessor.logradouro}',
                    bairro = '${dadosProfessor.bairro}',
                    cidade = '${dadosProfessor.cidade}',
                    estado = '${dadosProfessor.estado}',
                    cep = '${dadosProfessor.cep}',
                    email = '${dadosProfessor.email}'
                where id = ${dadosProfessor.id}`;
                
    // Executar script
    const result = await prisma.$executeRawUnsafe(sql);

    return !! result;
};

module.exports = {
    criaProfessor,
    atualizaProfessor,
};
