const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require('path');
const { CreateAccountController, getAccountController } = require('../controller/near.controller');

router.route('/getAllAccount').get(getAccountController)
router.route('/create-account').post(CreateAccountController)


module.exports = router;


 