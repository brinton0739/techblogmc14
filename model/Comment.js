const { Model, DataTypes } = require ('sequelize');
const User = require('./User');
const Post = require('./Post');
const sequelize = require('../config/connection');

class Comment extends Model {}


Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            
        },        
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allownull: false,
            references: {
                model: Post,
                key: 'id'
            }
        },

        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        }
        },
        {
            sequelize,
            freezTableName: true,
            underscored: true,
            tableName: 'comment',
            modelName: 'comment'
        }
    
);

module.exports = Comment;