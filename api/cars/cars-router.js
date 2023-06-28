const Car = require("./cars-model");
const express = require("express");
const router = express.Router();
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
} = require("./cars-middleware");

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  res.json(req.car);
});

router.post("/", checkCarPayload, 
checkVinNumberValid,
checkVinNumberUnique, 
async (req, res, next) => {
    try {
        const car = await Car.create(req.body)
        res.status(201).json(car)
    } catch(err) {
        next(err)
    }
});

module.exports = router;
