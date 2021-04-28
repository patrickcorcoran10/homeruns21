const db = require('../models')

module.exports = function(app) {
    // Routes go here.
    // Create Team
    app.post("/api/create-team", function(req, res) {
        console.log(req.body);
        db.Team.create({
            player: req.body.player
        })
        .then(function(dbPost) {
            res.json(dbPost);
          });
    })
    app.get("/api/get-all-teams", function(req, res) {
        db.Team.findAll({})
        .then(function(dbPost) {
            res.json(dbPost);
          });
    })
}