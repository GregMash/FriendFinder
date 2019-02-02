const friendData = require('../data/friends');


module.exports = (app) => {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function (req, res) {
        let match = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        let userData = req.body;
        let userScores = req.body.scores;

        var totalDifference = 0;

        for (let i = 0; i < friendData.length; i++) {
            totalDifference = 0;

            for (let j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
                if (totalDifference <= match.matchDifference) {

                    match.name = friendData[i].name;
                    match.image = friendData[i].image;
                    match.matchDifference = totalDifference;
                }
            };
        };
        friendData.push(userData);

        res.json(match);
    });
};
