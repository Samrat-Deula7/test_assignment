const express = require("express");
const router = express.Router();

const Product =require("../dbModel/dbSchema")

router.get("/category", async (req, res) => {
  try {
    const q = req.query.q || "electronics";
    const productData = await Product.find({
      category: { $regex: q, $options: "i" }, // food = Food
    }).sort({ createdAt: -1 }); // newly saved data will be shown first
    return res.status(200).json(productData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/price", async (req, res) => {
   const min = req.body.min || 0;
   const max = req.body.max || 1000000;

   try {
     const products = await Product.find({
       priceMin: { $lte: max },
       priceMax: { $gte: min },
     });
     res.json(products);
   } catch (error) {
     res.status(500).json({ message: error.message });
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
