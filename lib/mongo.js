/**
 * Description: Mongoose实例以及与MongoDB的连接
 */

const Config = require('config-lite')
  , mongoose = require('mongoose')
  , path = require('path')
  , basePath = path.resolve(__dirname, '../')
  , config = Config(basePath);

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb);

