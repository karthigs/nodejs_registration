const config = require('config.json');
const mongoose = require('mongose');
const connectionOption = {useCreateIndex = true , useNewUrlParser = true , useUnifiedToplogy = true , useFindAndModify = false };

mongoose.connect(process.env.MONGODB_URI || config.connectionString , connectionOption)
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};