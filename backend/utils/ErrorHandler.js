import ErrorObject from "./ErrorObject.js";

const ErrorHandler = (err, req, res, next) => {
  console.log(err);

  res.status(err.statusCode || 500);
  res.json({
    message: err.message || "Server Error",
    translateCode: err.translateCode && err.translateCode,
  });
};

const NotFound = (req, res, next) => {
  const NotFoundError = new ErrorObject(`The url you wanted to see '${req.originalUrl}' is not found`, 404, "404");
  next(NotFoundError);
};

export { ErrorHandler, NotFound };
