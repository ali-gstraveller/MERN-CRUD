const express = require('express');
const app = express();
const db = require('./config/db');

db.connection.once('open', ()=>{
        console.log('db connected')
})
.on('error', (err)=>{
        console.log("error connecting in db", err)
})

app.use( express.json() );

app.listen( process.env.port ||   3000, ()=>{
    console.log("hello world from class 3")
})


app.use( '/',  require('./routes')) ;


