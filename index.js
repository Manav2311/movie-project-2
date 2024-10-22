const express = require('express');
const {db} = require('./config/database');
const bodyParser = require('body-parser');

const port = 8081;

const app = express();

app.set('view engine','ejs');

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

app.use('/',require('./routers/index'));

app.listen(port,(err)=>{
    if (!err) {
        db();
        console.log("server is started on http://localhost:" + port);
    }
})
