const prisma = require('../prismaClient')

const createUser = async (user) => {
    try {
        const newUser = await prisma.user.create({
          data: {
            firebase_id: user.id,
            email: user.email,
            first_name: user.firstName,
            last_name: user.lastName
          }
        })

        const createdUser = getUser(newUser)

        return newUser
    } catch (err) {
        console.error('Error trying to create user', err)
    }
}

const getUser = (user) => {
    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        firebaseId: user.firebase_id
    }
}

module.exports = createUser
