const VisitorCounterModel = require("../models/visitor-counter-model");

module.exports.getVisitorCount = async () => {
  try {
    let counter = await VisitorCounterModel.VisitorCounter.findOne();
    
    // If no counter exists, create one
    if (!counter) {
      counter = await VisitorCounterModel.VisitorCounter.create({
        totalVisits: 0,
        created: new Date(),
        updated: new Date()
      });
    }
    
    return counter.totalVisits;
  } catch (error) {
    throw Error(error);
  }
};

module.exports.incrementVisitorCount = async () => {
  try {
    let counter = await VisitorCounterModel.VisitorCounter.findOne();
    
    // If no counter exists, create one
    if (!counter) {
      counter = await VisitorCounterModel.VisitorCounter.create({
        totalVisits: 1,
        created: new Date(),
        updated: new Date()
      });
    } else {
      // Increment the counter
      counter.totalVisits += 1;
      counter.updated = new Date();
      await counter.save();
    }
    
    return counter.totalVisits;
  } catch (error) {
    throw Error(error);
  }
};
