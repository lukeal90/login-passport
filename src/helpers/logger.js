const winston = require('winston');
const packageJson = require('../../package.json');

const {
    createLogger,
    format: {
        combine,
        timestamp,
        printf,
        colorize,
        align
    },
    transports: {
        Console, File
    }
} = winston;

const myCustomLevels = {
    levels: {
        error: 0,
        info: 2,
        warn: 1
    },
    colors: {
        error: 'red',
        info: 'green',
        warn: 'yellow'
    }
};

const customFormat = printf(info =>
    `[${info.level} ${new Date(info.timestamp).toLocaleString()}] ${info.message}`
);

winston.addColors(myCustomLevels.colors);

const format = combine(
    timestamp(),
    align(),
    colorize({ all: true }),
    customFormat
);

const getTransports = () => {
    const transportOpts = [
        (new Console({
            level: 'info',
            colorize: true
        }))
    ];

    transportOpts.push(
        new File({
            filename: './logs/error.log',
            level: 'error',
            format,
          })
    );
    transportOpts.push(
        new File({
            filename: './logs/warn.log',
            level: 'warn',
            format,
          }),
    );
    
    return transportOpts;
};

const logger = createLogger({
    format,
    levels: myCustomLevels.levels,
    transports: getTransports()
});

module.exports = logger;
