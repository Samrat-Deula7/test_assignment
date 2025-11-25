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

router.get("/pricemin", async (req, res) => {
  try {
    const q = parseInt(req.query.q);
    const productData = await Product.find({
      priceMin: { $lte: q },
    }).sort({ createdAt: -1 }); // newly saved data will be shown first
    return res.status(200).json(productData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/pricemax", async (req, res) => {
  try {
    const q = parseInt(req.query.q);
    const productData = await Product.find({
      priceMax: { $gte: q },
    }).sort({ createdAt: -1 }); // newly saved data will be shown first
    return res.status(200).json(productData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/availableproducts", async (req, res) => {
   try {
     let product = await Product.find({ Availability: true });
     res.json(product);
   } catch (error) {
     res.status(500).send("Some error occured while fetching all the data");
   }
});


module.exports = router;
