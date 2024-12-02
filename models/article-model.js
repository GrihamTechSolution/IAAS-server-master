const Sequelize = require("sequelize")
const sequelize = require("../common/db-config")

const User = require("./user-model")

const Model = Sequelize.Model
class ArticleCategory extends Model {}
ArticleCategory.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "name",
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "description",
    },
    updated: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "updated",
    },
    created: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "created",
    },
  },
  {
    sequelize,
    modelName: "article_category",
    tableName: "article_category",
    timestamps: false,
    // options
  }
)

class Article extends Model {}
Article.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    articleCategoryID: {
      type: Sequelize.INTEGER,
      field: "article_category_id",
    },
    userID: {
      type: Sequelize.INTEGER,
      field: "user_id",
    },
    status: {
      type: Sequelize.INTEGER,
      field: "status",
    },
    title: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    imagePath: {
      type: Sequelize.STRING,
      field: "image_path",
    },
    updated: {
      type: Sequelize.DATE,
    },
    created: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "article",
    tableName: "article",
  }
)

class Comment extends Model {}
Comment.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
      field: "user_id",
    },
    articleID: {
      type: Sequelize.INTEGER,
      field: "article_id",
    },
    content: {
      type: Sequelize.TEXT,
    },
    updated: {
      type: Sequelize.DATE,
    },
    created: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize,
    tableName: "comment",
    modelName: "comment",
    timestamps: false,
  }
)

Article.hasOne(ArticleCategory, {
  foreignKey: "id",
  sourceKey: "articleCategoryID",
})

Comment.hasOne(User, {
  foreignKey: "id",
  sourceKey: "userID",
})

Article.hasOne(User, {
  foreignKey: "id",
  sourceKey: "userID",
})

ArticleCategory.hasMany(Article, {
  as: "articles",
  foreignKey: "articleCategoryID",
})

Article.hasMany(Comment, {
  as: "comments",
  foreignKey: "articleID",
})

module.exports = { ArticleCategory, Article, Comment }
