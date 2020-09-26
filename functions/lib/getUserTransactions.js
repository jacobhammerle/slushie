const prisma = require('../prismaClient')

const getUserTransactions = async () => {
    try {
        const userTransactions = await prisma.transaction.findMany({
            where: { user_id: 1 },
            select: {
                id: true,
                price: true,
                category_id: true,
                date_modified: true,
                date_created: true,
                transaction_category: {
                  select: {
                    name: true
                  }
                }
            }
        })

        const transactions = userTransactions.map((transaction) => {
          return getTransaction(transaction)
        })
        return transactions
    } catch (err) {
        console.error('Error trying to get user transactions', err)
    }
}

const getTransaction = (transaction) => {
    return {
        id: transaction.id,
        category: transaction.transaction_category.name,
        price: transaction.price,
        dateCreated: transaction.date_created
    }
}

module.exports = getUserTransactions
