const express = require("express");
const authController = require("../controllers/Auth");


//Router initialization

const router = express.Router();

//get product
router.get("/products", authController.products);

module.exports =router