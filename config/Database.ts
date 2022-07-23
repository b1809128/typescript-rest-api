const mongoose = require('mongoose');

const MONGODB_URL = "mongodb://localhost:27017/typescript";
const database = mongoose.connect(
    MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("Connected MongoDB")
);

module.exports = database