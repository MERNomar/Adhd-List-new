const express = require("express");
const router = express.Router();
const workDayControllers = require("../controllers/workDayControllers");
const authMiddleware = require("../middleware/authMIddleware");

router.use(authMiddleware);

router.post("/post-work-day", workDayControllers.postWorkDay);
router.get("/get-work-day", workDayControllers.getWorkDay);
router.put("/put-work-day", workDayControllers.putWorkDay);

module.exports = router;
