const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoUrl = process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost:27017/studentPortal';

async function connectToDb(){
    try {
        await mongoose.connect(mongoUrl)
        console.log('connected to database')
    } catch{
        console.log('unable to connect to database')
    }
}

module.exports = connectToDb