const asyncHandler = (routeFounction) => (req, res, next) => Promise.resolve(routeFounction(req, res, next)).catch(next);

export default asyncHandler;
