"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var SequelizeType = /** @class */ (function () {
    function SequelizeType() {
    }
    SequelizeType.primaryKeyInteger = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true }, (props || {}));
    };
    SequelizeType.foreignKeyUUID = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.UUID }, props);
    };
    SequelizeType.integer = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.INTEGER }, props);
    };
    SequelizeType.float = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.FLOAT }, props);
    };
    SequelizeType.decimal = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.DECIMAL(12, 3) }, props);
    };
    SequelizeType.boolean = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.BOOLEAN }, props);
    };
    SequelizeType.text = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.TEXT }, props);
    };
    SequelizeType.string = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.STRING }, props);
    };
    SequelizeType.json = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.JSON }, props);
    };
    SequelizeType.phoneNumber = function (disallowNull, props) {
        return this.string(disallowNull, props);
    };
    SequelizeType.email = function (disallowNull, props) {
        return this.string(disallowNull, props);
    };
    SequelizeType.date = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.DATE }, props);
    };
    SequelizeType.time = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.TIME }, props);
    };
    SequelizeType.uang = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.BIGINT }, props);
    };
    SequelizeType.tanggalCheckInCheckOut = function (disallowNull, props) {
        return this.date(disallowNull, props);
    };
    SequelizeType.tanggalBerlaku = function (disallowNull, props) {
        return this.date(disallowNull, props);
    };
    SequelizeType.enum = function (disallowNull, props) {
        return __assign({ allowNull: !disallowNull, type: sequelize_1.DataTypes.ENUM }, props);
    };
    return SequelizeType;
}());
exports["default"] = SequelizeType;
