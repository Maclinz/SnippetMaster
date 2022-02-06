//connect to mongoDB database
const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: false
    }).then(() => {
        console.log('DB connection successful');
    })
}

module.exports = dbConnection;
