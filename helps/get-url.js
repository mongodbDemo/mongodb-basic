var config = require('config');
var dbConfig = config.get('Test.dbConfig');
module.exports = `mongodb://localhost:27017/${dbConfig.dbName}`;
