const asyncHander = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Async Handler Error:", error);

      // Set the status code and send a JSON response
      res.status(error.code || 500).json({
        success: false,
        message: error.message || "Internal Server Error",
      });
    }
  };
};

export default asyncHander;
// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) => async () => {};

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
