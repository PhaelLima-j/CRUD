const express = require ('express');

const { logger } = require ('../../utils');
const bodyParser = require('body-parser');

const router = express.Router();

router.delete('professor/:id', cors(), async (req, res) => {
    const idProfessor = req.params.id;
    

});

