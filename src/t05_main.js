const {
    StartLogger
} = require('./t05_injectIntoMain')
const log4js = require('log4js');
log4js.configure('./config/t05_log4js-config.json');


async function main() {
    const logger = log4js.getLogger();
    logger.level = 'info';

    const startLogger = new StartLogger(logger)
    startLogger.hello("hello")
}

main()
