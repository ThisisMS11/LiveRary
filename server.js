const express = require('express')
const app = express();
const expressLayout = require('express-ejs-layouts');
const connectTomongo = require('./db')

connectTomongo();

// importing all of our routes
//! indexRouter has got set to router in index.js file
const indexRouter = require('./routes/index');

require('dotenv').config();

app.set('view engine', 'ejs');

//* This is to server all of our views files like html.
app.set('views', __dirname + '/views');


// ! this idea behind layout file is to bring all the html code under a single file so that we don't have to repeat repetitive code portions again and again like header and footers.
app.set('layout', 'layouts/layout');


// this is to tell our app that we are using the express layout
app.use(expressLayout);

//! This is to serve all the files that we will serve publicely(on the frontend) like the html,css,js, images,etc.

app.use(express.static(__dirname + '/public'));


// ! For a small project we may add all of our routes/controllers inside the same server.js but for a large project it becomes hard to manage and that we use 


// telling the app to use routes
app.use('/', indexRouter);


app.listen(process.env.PORT, () => {
    console.log('Express server listening on port' + process.env.PORT);
})


