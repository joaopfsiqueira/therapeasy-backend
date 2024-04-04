import * as winston from 'winston'
import moment from 'moment-timezone'
const { colorize, prettyPrint, timestamp } = winston.format

export interface ILog {
    log(level: string, message: string): winston.Logger
}

class Logger implements ILog {
    public logger: winston.Logger

    public options: winston.LoggerOptions = {
        format: winston.format.combine(
            timestamp({
                format: () => moment().tz(`${process.env.TIMEZONE}`).format('YYYY-MM-DD HH:mm:ss'),
            }),
            prettyPrint(),
            colorize()
        ),
        transports: [new winston.transports.Console()],
    }

    constructor() {
        this.logger = winston.createLogger(this.options)
    }

    public log(level: string, message: string): winston.Logger {
        return this.logger.log(level, message)
    }
}

export default Logger
