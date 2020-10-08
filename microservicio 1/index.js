var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser'); 
const mongoose = require('mongoose')
const Router = require('./routes/route.js');
const url = `mongodb+srv://root:root@cluster0.kikhi.mongodb.net/curso?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

    console.log


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Router);
var port = process.env.PORT || 3000;       





app.listen(port);
console.log('Aplicación creada en el puerto: ' + port); 