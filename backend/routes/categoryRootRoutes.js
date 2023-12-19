const express = require("express");
const router = express.Router();
const categoryRootControllers = require("../controllers/categoryRootControllers");
const authMiddleware = require("../middleware/authMIddleware");

router.use(authMiddleware);

router.post("/post-category-root", categoryRootControllers.postCategoryRoot);
router.get("/get-category-root", categoryRootControllers.getCategoryRoots);

module.exports = router;
