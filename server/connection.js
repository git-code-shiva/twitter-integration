const mongoose = require('mongoose');
require('dotenv').config();

async function getConnection(){
    await mongoose.connect(process.env.MONGO_URI)
}
module.exports= getConnection;