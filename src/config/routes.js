
const express = require('express')

module.exports = server => {
  // Definindo a URL base para todas as rotas
  const router = express.Router()
  server.use('/api', router)

  // Rotas de ciclo de pagamentos
  const BillingCycle = require('../api/bilingCicle/billingCicleService')
  BillingCycle.register(router, '/billingCycles')
}
