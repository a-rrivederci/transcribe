import caller               from 'caller';
import { getNamespace }     from 'continuation-local-storage';

function createLogger(bunyan) {
    return {
        info: (logData) => {
            logData.src = {
                filename: caller()
            };
            const context = getNamespace('context');
            if (context) {
                logData.correlationId = context.get('correlationId');
            }
            bunyan.info(logData);
        },
        error: (logData) => {
            logData.src = {
                filename: caller()
            };
            const context = getNamespace('context');
            if (context) {
                logData.correlationId = context.get('correlationId');
            }
            bunyan.error(logData);
        },
        warn: (logData) => {
            logData.src = {
                filename: caller()
            };
            const context = getNamespace('context');
            if (context) {
                logData.correlationId = context.get('correlationId');
            }
            bunyan.warn(logData);
        }
    };
}

module.exports = createLogger;
