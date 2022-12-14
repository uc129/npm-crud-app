// import { v4 as uuid } from 'uuid'
let userController = [];

const getUsers = (req, res) => {
    console.log(`Users in the database: ${userController}`);

    res.send(userController);
}

const createUser = (req, res) => {
    const user = req.body;

    userController.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);
};

 const getUser = (req, res) => {
    res.send(req.params.id)
};

 const deleteUser = (req, res) => {
    console.log(`user with id ${req.params.id} has been deleted`);
    
    userController = userController.filter((user) => user.id !== req.params.id);
};

 const updateUser =  (req,res) => {
    const user = userController.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};

 module.exports = {getUsers,getUser,createUser,deleteUser,updateUser};