const usersDB = [];

//* {
//*   id: 1,
//*   first_name: "string",
//*   last_name: "string",
//*   email: "string",
//*   password: "string",
//*   birthday: "YYYY/MM/DD"
//* }

let id = 1;

const findAllUsers = () => {
    return usersDB
}

const findUserById = (id) => {
    const data = usersDB.find( user => user.id == id)
    return data
}

const createUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }

    usersDB.push(newUser)
    return newUser
}

const updateUser = (id, obj) => {
    
    const data = usersDB.find(user => user.id == id)
    // const index = usersDB.findIndex( obj => obj == obj.id)
    
        data.id,
        data.first_name = obj.first_name,
        data.last_name = obj.last_name,
        data.email = obj.email,
        data.password = obj.password,
        data.birthday = obj.birthday
   
      return data
//    usersDB.splice(index, 1, update)
//    return update          
}

const deleteUser = (id) => {
    
    const data = usersDB.find(user => user.id == id)
    // const index = usersDB.findIndex( user => user.id == id)
    
        if(data) {
            usersDB.splice(data, 1)
        } 
   
      return data
//    usersDB.splice(index, 1, update)
//    return update          
}




module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    usersDB
}