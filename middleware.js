//Sometimes you want to add additional functionality between the default request-response-cycle. Let's say you want to get some detailed information about the current request. e.g logger

const logger = (req, res, next) => {
    console.log(`----------------Time: ${new Date()} - Method: ${req.method} - Path: ${req.originalUrl}`);
    next();
};

module.exports = logger;