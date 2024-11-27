const express = require('express')
const router = express.Router();

const clientes = require('./controller/clientes')

const teste = (req, res) => {
    res.json("Back-end, respondendo")
}

router.get('/', teste)

router.post('/clientes', clientes.create)
router.get('/clientes', clientes.read)
router.put('/clientes/:id', clientes.update)
router.delete('/clientes/:id', clientes.deletar)

module.exports = router