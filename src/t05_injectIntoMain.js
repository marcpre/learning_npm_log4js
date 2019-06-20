const log4js = require('log4js');

class StartLogger {

    constructor(log) {
        logger = log
    }

    hello(msg) {
        this.logger.info("Your Message: " + msg);
    }
}

module.exports = {
    StartLogger
};