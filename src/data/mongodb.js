const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI;

let db;

async function connectDB(){
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

    try{
        await client.connect();
        db = client.db();
        console.log('Connected to MongoDB');
    } catch (error){
        console.error('Error connecting to MongoDB: ', error);
        process.exit(1);
    }
}

function getDB(){
    return db;
}
module.exports = {
    connectDB,
    getDB,
};