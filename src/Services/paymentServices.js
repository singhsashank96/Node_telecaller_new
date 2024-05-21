const Payment = require("../Model/paymentSchema");
const Tile = require("../Model/tilesSchema");
const Size = require("../Model/sizeSchema");
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance
const { QueryTypes } = require('sequelize');
const { sendResponse } = require("../Utlis/common");

exports.getPendingSamples = async (userId) => {
  try {
    // Fetch tile IDs associated with the user from the payment table
    const payments = await Payment.findAll({
      where: { user_id: userId },
      attributes: ['tilesName', 'sizesName', 'sampleCount'], // Select tile IDs and sample count
      raw: true
    });

    // Extract tile IDs from the payment records
    const tileIdsInPayment = payments.map(payment => payment.tilesName);

    const sqlQuery = `
      SELECT
        tile.tilesName AS tileName,
        tile.image AS image,
        size.sizesName AS sizeName,
        payment.sampleCount
      FROM
        tbl_booking AS booking
      LEFT JOIN
        tbl_tiles AS tile ON booking.tilesName = tile.tilesId
      LEFT JOIN
        tbl_sizes AS size ON booking.sizesName = size.sizesId
      LEFT JOIN
        tbl_payment AS payment ON booking.tilesName = payment.tilesName
      WHERE
        booking.tilesName NOT IN (:tileIdsInPayment)
    `;

    // Fetch pending samples associated with the user from the booking table
    const pendingSamples = await sequelize.query(sqlQuery, {
      replacements: { tileIdsInPayment },
      type: sequelize.QueryTypes.SELECT
    });

    return pendingSamples;
  } catch (error) {
    console.error("Error fetching sample information:", error);
    throw new Error("Internal server error");
  }
};


exports.getDeliveredSamples = async (user_id) => {
  try {

    // Fetch payment records for the specified user
    const payments = await Payment.findAll({
      where: { user_id: user_id },
      attributes: ['tilesName', 'sizesName', 'sampleCount'], // Select only required columns
      raw: true // Get raw data
    });

    // Extract tile IDs and size IDs from payment records
    const tileIds = payments.map(payment => payment.tilesName);
    const sizeIds = payments.map(payment => payment.sizesName);

    // Fetch tile and size information based on IDs
    const tiles = await Tile.findAll({
      where: { tilesId: tileIds },
      attributes: ['tilesId', 'tilesName', 'image'], // Select only required columns
      raw: true // Get raw data
    });

    const sizes = await Size.findAll({
      where: { sizesId: sizeIds },
      attributes: ['sizesId', 'sizesName'], // Select only required columns
      raw: true // Get raw data
    });

    // Combine tile and size information
    const tileInfo = payments.map(payment => {
      // Find the tile and size associated with the payment
      const tile = tiles.find(tile => tile.tilesId === payment.tilesName);
      const size = sizes.find(size => size.sizesId === payment.sizesName);

      // Check if tile and size are defined before accessing their properties
      const tilesName = tile ? tile.tilesName : null;
      const image = tile ? tile.image : null;
      const sizesName = size ? size.sizesName : null;

      return {
        tilesName: tilesName,
        image: image,
        sizesName: sizesName,
        sampleCount: payment.sampleCount 
      };
    });

    return tileInfo
  } catch (error) {
    console.error("Error fetching sample information:", error);
    throw new Error("Internal server error");
  }
};







