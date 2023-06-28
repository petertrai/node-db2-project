const Car = require("./cars-model");
const db = require('../../data/db-config')
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      next({ status: 404, message: `car with id ${req.params.id} is not found` })
    } else {
      req.car = car
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  try {
    if (!req.body.vin) {
      res.status(400).json({ message: `vin is missing` })
    } else if (!req.body.make) {
      res.status(400).json({ message: `make is missing` })
    } else if (!req.body.model) {
      res.status(400).json({ message: `model is missing` })
    } else if (!req.body.mileage) {
      res.status(400).json({ message: `mileage is missing` })
    } else {
      next()
    }
  } catch(err) {
    next(err)
  }
};

const checkVinNumberValid = (req, res, next) => { 
  try {
    const isValid = vinValidator.validate(req.body.vin)
    if (!isValid) {
      next({status: 400, message: `vin ${req.body.vin} is invalid` })
    } else {
      next()
    }
  } catch(err) {
    next(err)
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existing = await db('cars').where('vin', req.body.vin).first()
    if (existing) {
      next({ status: 400, message: `vin ${req.body.vin} already exists` })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
