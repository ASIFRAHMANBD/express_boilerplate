const dotenv = require('dotenv');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config =  require('./config/config.json')[env];
dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : config.host || 'localhost',
    PORT : 5000
}
