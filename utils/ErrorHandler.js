const ErrorHandler = (err, req, res, next) => {
  console.log(err);

  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.json({
    message: err.message || "Server Error",
  });
};

const NotFound = (req, res, next) => {
  const NotFoundError = new Error(`The url you wanted to see '${req.originalUrl}' is not found`);
  res.status(404);
  next(NotFoundError);
};

export { ErrorHandler, NotFound };
