export default Async = (routeFounction) => (req, res, next) => Promise.resolve(routeFounction(req, res, next)).catch(next);
