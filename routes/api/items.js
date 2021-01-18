const express = require("express");
const router = express.Router();
const auth = require("../../Middleware/auth");

//Item model
const Item = require("../../models/Item");

// @route   GET /api/items
// @desc    get all items
// @acess   public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

// @route   POST /api/items
// @desc    Create an item
// @acess   private
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => res.json(err));
});

// @route   DELETE /api/items
// @desc    Delete an item
// @acess   private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json("item deleted")))
    .catch((err) => res.json(err));
});

module.exports = router;
