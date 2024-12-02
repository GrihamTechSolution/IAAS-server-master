const Joi = require("joi");
const {
  getAllTestimonies,
  insertTestimony,
  getOneTestimonyById,
} = require("../service/testimonials-service");

module.exports.insertTestimonials = async (req, res) => {
  const schema = Joi.object({
    applicationID: Joi.number().required(),
    testimony: Joi.string().required(),
    imageUrl: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }

  const { applicationID, testimony, imageUrl } = value;

  try {
    const data = await insertTestimony(applicationID, testimony, imageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "successfully inserted testimonies",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.getAllTestimonials = async (req, res) => {
  const schema = Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).default(10),
  });

  const { error, value } = schema.validate(req.query);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { page, limit } = value;

  const offset = (page - 1) * limit;

  try {
    const data = await getAllTestimonies(page, limit, offset);
    res.status(200).json({
      success: true,
      ...data,
      message: "successfully got testimonies",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.getOneTestimonialById = async (req, res) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  const { error, value } = schema.validate(req.params);
  if (error) {
    return res.send({
      success: false,
      message: error.details[0].message,
    });
  }

  const { id } = value;

  try {
    const data = await getOneTestimonyById(id);
    res.status(200).json({
      success: true,
      data,
      message: "successfully get testimony",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
