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
    const data = usersDB.find( user === user.id == id)
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


module.exports = {
    findAllUsers,
    findUserById,
    createUser
}