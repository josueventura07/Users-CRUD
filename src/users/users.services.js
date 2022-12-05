const usersControllers = require('./users.controllers');


const getAllUsers = (req, res) => {
    const data = usersControllers.findAllUsers()
        res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id

    const data = usersControllers.findUserById(id)

     if(data) {
        res.status(200).json(data)
     } else {
        res.status(404).json({message: "Invalid ID"})
     }
}

const postCreateUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body

    if(first_name) {
        const data = usersControllers.createUser({ first_name, last_name, email, password, birthday })
        res.status(201).json(data)
    } else {
        res.status(400).json({
            message: 'Invalid Data', 
            fields: {
                first_name: 'string', 
                last_name: 'string', 
                email: 'string', 
                password: 'string', 
                birthday: 'YYYY/MM/DD'
            }
        })
    }
}

const patchUser = (req, res) => {
    const id = req.params.id
    const {first_name, last_name, email, password, birthday} = req.body
    if(first_name) {
        usersControllers.updateUser(id, { first_name, last_name, email, password, birthday})
        res.status(200).json({message: 'Updated successfully'})
        } else {
            res.status(400).json({message: 'Invalid Data'})
        }
}

const deleteUser = (req, res) => {
    const id = req.params.id
    const data = usersControllers.usersDB.find(user => user.id == id)
            if(data) {
            usersControllers.deleteUser(id)
            res.status(200).json({message: `UserId: ${id} deleted successfully`})

        } else {
            res.status(400).json({message: `UserId: ${id} not available`})
        }

   
        
}



module.exports = {
    getAllUsers,
    getUserById,
    postCreateUser,
    patchUser,
    deleteUser
}