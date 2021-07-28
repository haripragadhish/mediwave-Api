const mongoose = require('mongoose');

const URI = "mongodb+srv://Hari:Hari123$@mongo.vu7lm.mongodb.net/crib?retryWrites=true&w=majority";

const connectDb  = async() =>{
await mongoose.connect(URI,{ useNewUrlParser: true , useUnifiedTopology: true});
console.log("Database connected");
}

module.exports = connectDb;