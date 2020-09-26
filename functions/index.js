const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const getUserTransactions = require('./lib/getUserTransactions')

exports.getUserTransactions = functions.https.onRequest(async (request, response) => {
    const transactions = await getUserTransactions()
    cors(request, response, () => {
        response.send({ transactions: transactions })
    })
})
