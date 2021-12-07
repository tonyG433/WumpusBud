const mongoose = require("mongoose");
const prefix = require("../config.json")

module.exports = mongoose.model("Wumpus", new mongoose.Schema({

    mainInfo: {
        user: {type: String},
        userhasWumpus: {type: Boolean, default: false},
        allWumpuses: { type: String},
        birthday: { type: String},
        wumpusName: { type: String},
        hasHat: { type: Boolean, default: false}
    },
}));