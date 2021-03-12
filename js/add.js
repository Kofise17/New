var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const DB_URL = "http://127.0.0.1:5984/_utils/#database/userinfo";

router.post('/signup', (req, res) => {
    axios.post(DB_URL, req.body)
        .then(response => res.redirect('/'))
        .catch(error => console.log(error));
})