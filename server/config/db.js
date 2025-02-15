const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connectToDb(){
    try {
        await mongoose.connect('mongodb://localhost:27017/studentPortal')
        console.log('connected to database')
    } catch{
        console.log('unable to connect to database')
    }
}

module.exports = connectToDb