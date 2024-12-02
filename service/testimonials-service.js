const TestimonialsModel = require("../models/testimonials-model");
const Joi = require("joi");
const User = require("../models/user-model");
const { Internship } = require("../models/internship-model");
const Country = require("../models/country-model");
const ApplicationModel = require("../models/application-model");

module.exports.getAllTestimonies = async (page, limit, offset) => {
  try {
    const result = await TestimonialsModel.findAndCountAll({
      offset: offset,
      limit: limit,
      order: [["created", "DESC"]],
      include: [
        {
          model: User,
          required: true,
          attributes: ["firstName", "lastName"],
          include: [{ model: Country, as: "country", attributes: ["name"] }],
        },
        {
          model: Internship,
          required: true,
          attributes: ["name"],
          include: [{ model: Country, as: "country", attributes: ["name"] }],
        },
      ],
      attributes: ["id", "testimony", "imageUrl"],
    });
    const totalPages = Math.ceil(result.count / limit);
    return {
      data: result,
      meta: {
        currentPage: parseInt(page),
        totalPages,
        totalCount: result.count,
      },
    };
  } catch (error) {
    throw Error(error);
  }
};

module.exports.insertTestimony = async (applicationID, testimony, imageUrl) => {
  // Check if applicationID is unique
  const existingTestimonial = await TestimonialsModel.findOne({
    where: {
      applicationID,
    },
  });

  if (existingTestimonial) {
    throw Error(
      "applicationID must be unique. Testimonial with this applicationID already exists."
    );
  }
  // check for userID and internshipID
  const existingApplication = await ApplicationModel.Application.findOne({
    where: {
      id: applicationID,
    },
  });

  if (!existingApplication) {
    throw Error("applicationID does not exist.");
  }

  const { userID, internshipID } = existingApplication;

  return TestimonialsModel.create({
    applicationID,
    testimony,
    imageUrl,
    userID,
    internshipID,
    updated: Date.now(),
    created: Date.now(),
  });
};

module.exports.getOneTestimonyById = async (id) => {
  return TestimonialsModel.findOne({
    where: {
      id,
    },
    include: [
      {
        model: User,
        required: true,
        attributes: ["firstName", "lastName"],
        include: [{ model: Country, as: "country", attributes: ["name"] }],
      },
      {
        model: Internship,
        required: true,
        attributes: ["name"],
        include: [{ model: Country, as: "country", attributes: ["name"] }],
      },
    ],
    attributes: ["id", "testimony", "imageUrl"],
  });
};
