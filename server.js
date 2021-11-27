var express = require("express");

const path=require ('path')

const morgan= require('morgan');

var app = express();


app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/assets/js'));
app.use('/images', express.static(__dirname + '/public/images'));

// middlewares

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

//ajustes

app.set('port', process.env.PORT || 3001);
app.set('views',path.join(__dirname, '/public/views'))
app.set('view engine', 'ejs')

// middlewares

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

// routes
app.use(require('../pwa-docker-node-js-master/public/routes/entries.routes'))


//404 error
app.use((req, res)=> {

    //res.status(404).send('404 not found')
    res.status(404).render('404')

})

//starting app

app.listen(app.get('port'), ()=>{

    console.log('Server on port', app.get('port'));
})