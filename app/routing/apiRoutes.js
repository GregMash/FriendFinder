const data = require('../data/friends');


module.exports = (app) => {
    app.get("/api/friends", function (req, res) {
        res.json(data);
    });
    app.post("/api/friends", function (req, res) {
        let userScores = req.body.scores;
        for (let i = 0; i < userScores.length; i++) {
            userScores[i] = parseFloat(userScores[i]);
            console.log(userScores);            
        }
        data.push(req.body);
    });
};