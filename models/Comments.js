const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comments extends Model {}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull:false,
            refrences: {
                model: 'posts',
                key: 'id'
            }
        },
        userName: {
            type: DataTypes.STRING,
            allowNull:false,
            refrences: {
                model: 'users',
                key: 'name'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
        }
    );
    
    module.exports = Comments;