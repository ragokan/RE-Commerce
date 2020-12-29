const ErrorHandler = (err, req, res, next) => {
  let error = { ...err };

  console.log(error);

  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.json({
    message: err.message,
    translateCode: 1,
    stack: err.stack,
  });
};

const NotFound = (req, res, next) => {
  const NotFoundError = new Error(`The url you wanted to see '${req.originalUrl}' is not found`);
  res.status(404);
  next(NotFoundError);
};

export { ErrorHandler, NotFound };
