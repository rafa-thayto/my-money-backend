
const BillingCycle = require('./billingCicle')

// Adding HTTP methods
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

BillingCycle.route('summary', (req, res, next) => {
  BillingCycle.aggregate({
    $project: { credit: { $sum: '$credits.value', debt: { $sum: '$debts.value' } } },
    $group: { _id: null, credit: { $sum: '$credit' }, debt: { $sum: '$dept' } }
  })
})

module.exports = BillingCycle
