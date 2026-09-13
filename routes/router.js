const express = require("express");
const router = express.Router();
const controllers = require("../controllers/foodControllers1");
const schema = require("../schemas/foodZodSchema");
const validate = require("../middlewares/validation");

router.get("/foods", controllers.get_foods);
router.get("/foods/:id", controllers.get_food_id);
router.get("/foods/search/:category", controllers.get_food_cat);
router.post("/foods", validate(schema), controllers.add_foods);
router.put("/foods/:id", validate(schema), controllers.update_foods);
router.delete("/foods/:id", controllers.delete_foods);

module.exports = router;