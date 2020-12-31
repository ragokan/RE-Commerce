import AuthRoutes from "./routes/AuthRoutes.js";
import UserRoutes from "./routes/UserRoutes.js.js";
import SellerRoutes from "./routes/SellerRoutes.js.js";
import ProductRoutes from "./routes/ProductRoutes.js.js";

export default (app) => {
  app.use("/api/auth", AuthRoutes);
  app.use("/api/user", UserRoutes);
  app.use("/api/seller", SellerRoutes);
  app.use("/api/product", ProductRoutes);
};
