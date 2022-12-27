const express = require('express');
var bodyParser = require('body-parser');
const route = require('./route/route.js');
const app = express();
const multer = require('multer')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://yashsingh:8i1kfhU26wUDrXft@cluster0.e53dru9.mongodb.net/group34Database", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});
