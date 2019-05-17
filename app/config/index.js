const config = require('./config.json');

exports.get = key => { return config[key] };