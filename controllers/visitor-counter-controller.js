const {
  getVisitorCount,
  incrementVisitorCount,
} = require("../service/visitor-counter-service");

module.exports.getVisitorCount = async (req, res) => {
  try {
    const count = await getVisitorCount();
    return res.status(200).json({
      success: true,
      data: count,
      message: "successfully get visitor count",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.incrementVisitorCount = async (req, res) => {
  try {
    const count = await incrementVisitorCount();
    return res.status(200).json({
      success: true,
      data: count,
      message: "successfully incremented visitor count",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
