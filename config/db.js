const mongoose = require("mongoose");
require('dotenv').config();
const { MongoMemoryServer } =require("mongodb-memory-server");



const DbConfg =async()=>{
    try {
       const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(":) mongodb connected");
        return connect
      } catch (error) {
        console.log(":( Database connection error", error);
      }
    // const connect =await MongoMemoryServer.create()
    // const getUri=connect.getUri()
    // const db = mongoose.connect(getUri)
    // console.log('connected')
    // return db

}

module.exports = DbConfg