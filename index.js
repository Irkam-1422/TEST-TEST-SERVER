const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4000
const db = "mongodb+srv://expansion4you:xH7Rd6ji1Ya413xm@cluster0.kgapqpo.mongodb.net/" 

const app = express() 

async function start() { 
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }) 
        console.log('Connected to DB') 
        app.listen(PORT, () => console.log('Server has been started'))
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}
start()