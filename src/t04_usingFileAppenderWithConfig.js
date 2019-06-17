
// require log4js
const log4js = require('log4js');

// Logger configuration
log4js.configure("./config/t04_log4js-config.json");

const logger = log4js.getLogger();

logger.level = 'info';
logger.info('Beginning program execution...');

// Log a message
logger.trace('Trace, log4js!');
logger.debug('Debug, log4js!');
logger.info('Hello, log4js!');
logger.warn('Heads up, log4js!');
logger.error('Danger, log4js!');
logger.fatal('Fatal, log4js!');