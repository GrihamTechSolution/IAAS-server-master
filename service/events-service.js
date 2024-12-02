const User = require("../models/user-model");
const EventsModel = require("../models/events-model");

module.exports.getAllEvents = async () => {
  try {
    const events = await EventsModel.Event.findAll({
      order: [["created", "DESC"]],
    });
    return events;
  } catch (error) {
    throw Error(error);
  }
};

module.exports.getEventsById = async (id) => {
  try {
    const event = await EventsModel.Event.findOne({
      where: {
        id,
      },
    });
    if (!event) {
      throw Error(`Event with ${id} not found`);
    }
    return event;
  } catch (error) {
    throw Error(error);
  }
};

module.exports.insertEvents = async (body) => {
  try {
    const events = await EventsModel.Event.create(body);
    return events;
  } catch (error) {
    throw Error(error);
  }
};

module.exports.updateEvents = async (id, body) => {
  try {
    const oldEvent = await EventsModel.Event.findOne({
      where: {
        id: id,
      },
    });
    if (!oldEvent) {
      throw Error(`Event with Id: ${id} is not found`);
    }
    await EventsModel.Event.update(body, {
      where: { id },
    });
    const newEvent = await EventsModel.Event.findOne({
      where: {
        id,
      },
    });
    return newEvent;
  } catch (error) {
    throw Error(error);
  }
};

module.exports.deleteEventsById = async (id) => {
  try {
    const oldEvent = await EventsModel.Event.findOne({
      where: {
        id: id,
      },
    });
    if (!oldEvent) {
      throw Error(`Event with Id: ${id} is not found`);
    }
    const events = await EventsModel.Event.destroy({
      where: { id },
    });
    return events;
  } catch (error) {
    throw Error(error);
  }
};
