const { Sequelize, DataTypes } = require("sequelize");

module.exports=(sequelize, DataTypes) => {
    const Komik = Sequelize.define("komik", {
        id:{
            type : DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    });
    return Komik;
}