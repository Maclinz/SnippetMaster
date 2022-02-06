//create a new express server and set it to listen on port 3000
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const snippetsRoutes = require('./routes/snippets');
const authRoutes = require('./routes/auth');

//require database connection
const dbConnection = require('./db/dbConnection');

const app = express();

//port to listen on
const port = process.env.PORT || 8000;

//db connection
dbConnection();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//Routes middleware
app.use('/api',snippetsRoutes);
app.use('/api',authRoutes);


//cors
if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: `${process.env.CLIENT_URL}`,
        credentials: true
    }));
}
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', `${process.env.CLIENT_URL}`);
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE','GET')
//         return res.status(200).json({})
//     }

//     next()
// })


//routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

const start = () =>{
    app.listen(port, () => {
        console.log('Server started on port 3000');
    })
}

start();

