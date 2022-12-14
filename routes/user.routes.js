/** @format */

// import express from 'express';

const {getUsers,getUser,createUser,deleteUser,updateUser}= require("../controllers/user.controller");
const express = require("express");

const router = express.Router();

router.get('/', ()=>getUsers);

router.post('/', ()=>createUser);

router.get('/:id', ()=>getUser);

router.delete('/:id', ()=>deleteUser);

router.patch('/:id', ()=>updateUser);

module.exports = router;
