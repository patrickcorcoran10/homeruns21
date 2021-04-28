module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
        player: {type: DataTypes.STRING},
        roster: {type: DataTypes.BLOB},
        score: {type: DataTypes.INTEGER},
        aprilScore: {type: DataTypes.INTEGER},
        mayScore: {type: DataTypes.INTEGER},
        juneScore: {type: DataTypes.INTEGER},
        julyScore: {type: DataTypes.INTEGER},
        augustScore: {type: DataTypes.INTEGER},
        septemberScore: {type: DataTypes.INTEGER},

    })
    return Team;
}