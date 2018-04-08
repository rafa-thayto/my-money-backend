
const BillingCycle = require('./billingCicle')

// Adding HTTP methods
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle
