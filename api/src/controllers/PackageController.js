const { Package } = require("../models");

exports.list = async (req, res, next) => {
  try {
    const result = await Package.findAll();
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
