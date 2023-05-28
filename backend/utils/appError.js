class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode;
      this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
  
      // This is a way to mark an error as operational, so we can distinguish operational errors from programming errors.
      // Operational errors are errors that we can predict might happen, like a wrong password, or a wrong URL.
      // Programming errors are errors that we can't predict, like a bug in our code.
      this.isOperational = true;
  
      // This is a way to remove the AppError class from the stack trace, so we can see only our code in the stack trace.
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;
  