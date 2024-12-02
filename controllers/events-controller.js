const User = require("../models/user-model");

const {
  getAllEvents,
  insertEvents,
  updateEvents,
  deleteEventsById,
  getEventsById,
} = require("../service/events-service");

module.exports.getAllEvents = async (req, res) => {
  try {
    const events = await getAllEvents();
    return res.status(200).json({
      success: true,
      data: events,
      message: "successfully get events",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.getEventsById = async (req, res) => {
  try {
    const id = req.params.id;
    const events = await getEventsById(id);
    return res.status(200).json({
      success: true,
      data: events,
      message: "successfully get events",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.addEvents = async (req, res) => {
  const events = Object.assign({
    ...req.body,
    created: new Date(),
    updated: new Date(),
  });

  events.imagePath = events.imagePath || "placeholder.webp";

  try {
    const data = await insertEvents(events);
    return res.status(200).json({
      success: true,
      data,
      message: "successfully created event",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.updateEvents = async (req, res) => {
  const id = req.params.id;
  const events = Object.assign({
    ...req.body,
    updated: new Date(),
  });
  try {
    const data = await updateEvents(id, events);
    return res.status(200).json({
      success: true,
      data,
      message: "successfully updated event",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.deleteEventById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await deleteEventsById(id);
    return res.status(200).json({
      success: true,
      data,
      message: "successfully deleted event",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
