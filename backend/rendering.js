import path from "path";

export default (app, express) => {
  if (process.env.NODE_ENV === "production") {
    var __dirname = path.resolve();
    app.use(express.static(__dirname + "frontend/build"));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
  }
};
