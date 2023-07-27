const express = require('express');
const { handleFormData } = require('./controllers');

const router = express.Router();

router.post('/form', handleFormData);

module.exports = router;