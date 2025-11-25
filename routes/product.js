const express = require("express");
const router = express.Router();

const Product =require("../dbModel/dbSchema")

const { body, validationResult } = require("express-validator");

router.post(
  "/addproducts",
  [
    body(
      "name",
      "Name of the product should have at least 3 characters"
    ).isLength({ min: 3 }),
    body(
      "category",
      "Category of the product should have at least 3 characters"
    ).isLength({
      min: 3,
    }),
   
  ],
  async (req, res) => {
        const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
 }
 try {
     product = await Product.create({
       name: req.body.name,
       category: req.body.category,
       Availability: req.body.Availability,
       priceMin: req.body.priceMin,
       priceMax: req.body.priceMax,
     });
     res.json(product);
 } catch (error) {
          res.status(500).send({"Some error occured while adding products":error});
 }
  }
);

module.exports = router;
