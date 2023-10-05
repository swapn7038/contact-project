const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = statusCode ? statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATE_ERROR:
      // 400 : validation_error
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      // 401 : unauthorized
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      // 403 : forbidden
      res.json({
        title: "Forbidden",
        message: res.message,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      // 404 : not_found
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.SERVER_ERROR:
      // 501 : server_error
      res.json({
        title: "Server Error",
        message: res.message,
        stackTrace: err.stack,
      });

    default:
      console.log("Everything is Good!");
      break;
  }
};

// export default errorHandler;
module.exports = errorHandler;
