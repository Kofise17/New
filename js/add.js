const axios = require('axios').default;
const DB_URL = "http://127.0.0.1:5984/userInfo";

axios.post(DB_URL, req.body)
    .then(response => res.redirect('/login'))
    .catch(error => console.log(error));