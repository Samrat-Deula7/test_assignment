const express = require("express");
const router = express.Router();

const Product =require("../dbModel/dbSchema")

router.get("/category", async (req, res) => {
  try {
    const q = req.query.q;
    const productData = await Product.find({
      category: { $regex: q, $options: "i" }, // food = Food
    }).sort({ createdAt: -1 }); // newly saved data will be shown first
    return res.status(200).json(productData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;
