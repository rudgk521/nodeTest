import fs from 'fs';
import winston from "winston";

const logDir = __dirname + '/../logs';
const koreanTime = () => new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Seoul',
  });

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const infoTransport = new winston.transports.File({
  filename: 'info.log',
  dirname: logDir,
  level: 'info',
})

const errorTransport = new winston.transports.File({
  filename: 'error.log',
  dirname: logDir,
  level: 'error',
})

const logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp(
    { format: koreanTime },), winston.format.json()),
    transports: [infoTransport, errorTransport]
})

const stream = {
  write: (message: string) => {
    console.log("message : "+message);
    logger.info(`${message}`);
  }
}

export { logger, stream }