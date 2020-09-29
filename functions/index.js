const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const getUserTransactions = require('./lib/getUserTransactions')
const createUser = require('./lib/createUser')

exports.createUser = functions.https.onRequest(async (request, response) => {
    const user = await createUser(request.body.user)
    cors(request, response, () => {
        response.send(user)
    })
})

exports.getUserTransactions = functions.https.onRequest(async (request, response) => {
    const transactions = await getUserTransactions(request.query.id)
    cors(request, response, () => {
        response.send({ transactions: transactions })
    })
})
