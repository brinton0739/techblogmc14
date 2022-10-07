const { Model, DataTypes } = require ('sequelize');
const User = require('./User')
const sequelize = require('../config/connection');

class Post extends Model {}


Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            
        },
        title: {
            type: DataTypes.STRING,
            allownull: false
        },
        post_content: {
            type: DataTypes.STRING,
            allownull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezTableName: true,
        underscored: true,
        tableName: 'post',
        modelName: 'post'
    }
    
);

module.exports = Post;