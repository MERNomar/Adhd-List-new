const express = require("express");
const router = express.Router();
const categoryRootControllers = require("../controllers/categoryRootControllers");
const authMiddleware = require("../middleware/authMIddleware");

router.get("/get-category-roots", categoryRootControllers.getCategoryRoots);

router.post("/post-category-root", categoryRootControllers.postCategoryRoot);

module.exports = router;
