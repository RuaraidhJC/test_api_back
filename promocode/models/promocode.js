const uuid = require("uuid/v4");

module.exports = (sequelize, DataTypes) => {
    const Promocode = sequelize.define("promocode", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuid()

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            len: [6, 50]
        },
        avantage: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "{}",
            get() {
                return JSON.parse(this.getDataValue("avantage"))
            },
            set(val) {
                this.setDataValue("avantage", JSON.stringify(val));
            }
        },
        restrictions: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "{}",
            get() {
                return JSON.parse(this.getDataValue("restrictions"))
            },
            set(val) {
                this.setDataValue("restrictions", JSON.stringify(val));
            }
        }
    });
    return Promocode;
}