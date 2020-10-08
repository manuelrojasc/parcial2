const express=require("express")
const bodyParser=require('body-parser')
const morgan = require("morgan")
const app=express()

app.set('port',process.env.PORT || 4000)


app.use(morgan('dev'))
app.use(bodyParser.json)

app.listen(app.get('port'),()=>{
    console.log('the magic on port :'+app.get('port'))
})