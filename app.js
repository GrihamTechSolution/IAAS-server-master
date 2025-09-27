require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const sequelize = require("./common/db-config");

// file upload import
const fileUpload = require("./common/file-upload");

// routing import
const sponsorRouting = require("./routing/sponsor-routing");
const partnerRouting = require("./routing/partner-routing");
const downloadRouting = require("./routing/download-routing");
const countryStatusRouting = require("./routing/country-status-routing");
const countryCategoryRouting = require("./routing/country-category-routing");
const articleCategoryRouting = require("./routing/article-routing");
const countryRouting = require("./routing/country-routing");
const faqRouting = require("./routing/faq-routing");
const faqCategoryRouting = require("./routing/faq-category-routing");
const userRouting = require("./routing/user-routing");
const regionRouting = require("./routing/region-routing");
const opTakerRouting = require("./routing/op-taker-routing");
const languageRouting = require("./routing/language-routing");
const internshipRouting = require("./routing/internship-routing");
const backgroundFieldRouting = require("./routing/background-field-routing");
const studentRouting = require("./routing/student-routing");
const mailRouting = require("./routing/mail-routing");
const applicationRouting = require("./routing/application-routing");
const studyAbroadRouting = require("./routing/study-abroad-program-routing");
const studyAbroadImageRouting = require("./routing/study-program-image-routing");
const favouriteAbroadRouting = require("./routing/favourite-abroad-routing");
const favouriteBlogRouting = require("./routing/favourite-blog-routing");
const favouriteInternshipRouting = require("./routing/favourite-internship-routing");
const votingRouting = require("./routing/voting-routing");
const votingQuestionRouting = require("./routing/voting-question-routing");
const votingQuestionOptionRouting = require("./routing/voting-question-option-routing");
const votingUserRouting = require("./routing/voting-user-routing");
const votingAnswerRouting = require("./routing/voting-answer-routing");
const uploaderRouting = require("./routing/uploader-routing");
const eventsRoutes = require("./routing/events-routing");
const testimonialRoutes = require("./routing/testimonial-routing");
const aluminiRouting = require("./routing/alumini-routing");
const emailSubscriptionRouting = require("./routing/email-subscription-routing");
const visitorCounterRouting = require("./routing/visitor-counter-routing");

const app = express();

// static
app.use("/api", express.static(path.join(__dirname, "public/uploads")));

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  next();
});

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routing integration
app.use("/api", sponsorRouting);
app.use("/api", partnerRouting);
app.use("/api", downloadRouting);
app.use("/api", countryCategoryRouting);
app.use("/api", countryStatusRouting);
app.use("/api", articleCategoryRouting);
app.use("/api", countryRouting);
app.use("/api", faqRouting);
app.use("/api", faqCategoryRouting);
app.use("/api", userRouting);
app.use("/api", regionRouting);
app.use("/api", opTakerRouting);
app.use("/api", languageRouting);
app.use("/api", internshipRouting);
app.use("/api", backgroundFieldRouting);
app.use("/api", studentRouting);
app.use("/api", mailRouting);
app.use("/api", applicationRouting);
app.use("/api", studyAbroadRouting);
app.use("/api", studyAbroadImageRouting);
app.use("/api", favouriteAbroadRouting);
app.use("/api", favouriteBlogRouting);
app.use("/api", favouriteInternshipRouting);
app.use("/api", votingRouting);
app.use("/api", votingQuestionRouting);
app.use("/api", votingQuestionOptionRouting);
app.use("/api", votingUserRouting);
app.use("/api", votingAnswerRouting);
app.use("/api", aluminiRouting);
//upload
// app.use('/api', fileUpload);
app.use("/api", uploaderRouting);
app.use("/api", eventsRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api", emailSubscriptionRouting);
app.use("/api", visitorCounterRouting);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(3000, (err) => {
  if (err) {
    console.log("Error while starting the server: ", err);
  } else {
    console.log("Server started at 3000!");
  }
});
