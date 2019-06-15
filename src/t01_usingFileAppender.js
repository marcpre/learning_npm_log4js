// require Log4js
const log4js = require('log4js');

// Logger configuration
log4js.configure({
    appenders: { fileAppender: { type: 'file', filename: './logs/logging.log' } },
    categories: { default: { appenders: ['fileAppender'], level: 'info' } }
});

// Create the logger
const logger = log4js.getLogger();

// Log a message
logger.info('Hello, log4js!');
