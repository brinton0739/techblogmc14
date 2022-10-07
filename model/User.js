const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(pw) {
        return bcrypt.compareSync(pw, this.password);
    };
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        hooks: {
            beforeCreate(userData) {
                userData.password = bcrypt.hashSync(userData.password, 10);
                return userData;
            },
            beforeUpdate(userData) {
                // don't need async we are using hashSync instead of hash
                userData.password = bcrypt.hashSync(userData.password, 10);
                return userData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'user',
        modelName: 'user'
    }
);

module.exports = User;