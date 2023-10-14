module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define("Package", {
    name: {
      type: DataTypes.STRING(255),
    },
    bill_amount: {
      type: DataTypes.BIGINT,
    },
    price: {
      type: DataTypes.BIGINT,
    },
  });

  return Package;
};
