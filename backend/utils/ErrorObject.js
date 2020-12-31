class ErrorObject extends Error {
  constructor(message, statusCode, translateCode = null) {
    super(message);
    this.statusCode = statusCode;
    this.translateCode = translateCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorObject;
