const {
  Page,
  PageArticleCategory,
} = require("../models/page-article-category-model");
const { findAll } = require("../models/user-model");
const User = require("../models/user-model");
const ArticleModel = require("./../models/article-model");

const { Op } = require("sequelize");

module.exports.getArticleCategories = (req, res) => {
  ArticleModel.ArticleCategory.findAll({
    include: [
      {
        model: ArticleModel.Article,
        include: [User, { model: ArticleModel.Comment, as: "comments" }],
        as: "articles",
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getArticleCategoryByID = (req, res) => {
  ArticleModel.ArticleCategory.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getArticleCategoriesForPage = (req, res) => {
  Page.findOne({
    where: { name: req.params.pageName },
    include: [{ model: PageArticleCategory, as: "pageArticleCategories" }],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err: err.message,
      });
    });
};

module.exports.insertArticleCategory = (req, res) => {
  let articleCategory = Object.create(req.body);
  articleCategory.updated = new Date();
  articleCategory.created = new Date();
  ArticleModel.ArticleCategory.create(articleCategory)
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.updateArticleCategory = (req, res) => {
  let articleCategory = Object.create(req.body);
  articleCategory.updated = new Date();
  ArticleModel.ArticleCategory.update(articleCategory, {
    where: { id: req.body.id },
  })
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.deleteArticleCategory = (req, res) => {
  ArticleModel.ArticleCategory.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getArticles = (req, res) => {
  ArticleModel.Article.findAll({
    include: [ArticleModel.ArticleCategory, "comments", User],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getArticlesForContentHub = async function (req, res) {
  console.log("WTF IS HAPPENING HERE");
  console.log();
  let data = [];

  let categories = await ArticleModel.ArticleCategory.findAll();
  for (let i = 0; i < categories.length; i++) {
    let articles = await ArticleModel.Article.findAll({
      where: { article_category_id: categories[i].id },
      order: [["id", "DESC"]],
      include: [ArticleModel.ArticleCategory, "comments", User],
    });

    data.push(articles[0]);
    data.push(articles[1]);
    data.push(articles[2]);
  }

  res.send(data);
};

module.exports.getArticleByID = (req, res) => {
  ArticleModel.Article.findByPk(req.params.id, {
    include: [
      ArticleModel.ArticleCategory,
      User,
      {
        model: ArticleModel.Comment,
        include: [User],
        as: "comments",
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getArticleByUserID = (req, res) => {
  ArticleModel.Article.findAll({
    where: { userID: req.params.userID },
    include: ArticleModel.ArticleCategory,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.insertArticle = (req, res) => {
  let article = Object.create(req.body);
  article.updated = new Date();
  article.created = new Date();
  ArticleModel.Article.create(article)
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.updateArticle = (req, res) => {
  let article = Object.create(req.body);
  article.updated = new Date();
  ArticleModel.Article.update(article, { where: { id: req.body.id } })
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.deleteArticle = (req, res) => {
  ArticleModel.Article.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.insertComment = (req, res) => {
  let comment = Object.create(req.body);
  comment.updated = new Date();
  comment.created = new Date();
  ArticleModel.Comment.create(comment)
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.deleteComment = (req, res) => {
  ArticleModel.Comment.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getByTimerange = (req, res) => {
  ArticleModel.Article.findAll({
    where: { created: { [Op.between]: [req.body.from, req.body.to] } },
    include: ArticleModel.ArticleCategory,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};
