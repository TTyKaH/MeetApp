const { Router } = require("express");
const router = Router();
const routes = [];
routes.forEach((r) => {
  if (!r.metod) {
    r.method = "post";
  }
  router[r.method](r.path, r.handler);
});
module.exports = router;
