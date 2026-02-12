const {createLogger,format,transports}=require("winston");
const {combine,timestamp,printf}=format;

const customFormat=printf(({level,message,timestamp})=>{
    return `${timestamp} : ${level} : ${message}`;
});

// createLogger is a fn from winston that creates a logger instance, configures how logs are formatted, configures where logs are sent(console,file,etc)
const logger=createLogger({
    format:combine(timestamp({format:"YYYY-MM-DD HH:mm:ss"}),customFormat),
    transports:[
        new transports.Console(), //this means if you are using winston, then print on the console
        new transports.File({filename:"combine.log"}) // logs will also come in combine.log file also
    ]
});

module.exports=logger