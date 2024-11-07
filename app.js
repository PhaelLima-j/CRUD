const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const createError = require('http-errors');
const { logger } = require('./utils');
const router = require('./routes');
const cors = require('cors');

const app = express();

// configurando formatos de parâmetros
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// declarando rotas
app.use('/', router);

// caso nenhuma rota de match, redireciona para a 404
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  res.json({
    sucesso: false,
    erro: err.message,
  });
});

const porta = 3000;

// Conexão com o banco via Prisma
async function main() {
  try {
    await prisma.$connect();
    logger.info('Conectado ao banco de dados com sucesso!');
  } catch (error) {
    logger.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1); 
  }
}

app.listen(porta, async () => {
  await main();
  logger.info(`Servidor ouvindo na porta ${porta}`);
});

module.exports = app;
