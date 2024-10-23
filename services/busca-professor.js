const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const buscaProfessor = (async () => {
    // script sql
    const sql = `select * from tbl_professor`;
    // roda script no banco
    const rsProfessor = await prisma.$queryRawUnsafe(sql);

    if (rsProfessor.length > 0)
        return rsProfessor;
    else
        return false;
});

module.exports = buscaProfessor;