class ApiError extends Error {
  constructor(
    statusCode,
    message,
    code = "INTERNAL_SERVER_ERROR",
    isOperational = true,
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = isOperational;
    this.data = null;
    this.success = false;
    this.message = message;
    if (stack) {
      this.stack = stack;
    } else {
      this.stack = new Error().stack;
    }
  }
}
export default ApiError;
