const mongoose = require("mongoose");
const prefix = require("../../config.json")

module.exports = mongoose.model("Wumpus", new mongoose.Schema({

    mainInfo: {
        allWumpuses: { type: String},
        birthday: { type: String},
        wumpusName: { type: String},
        hasHat: { type: Boolean, default: false}
    },
    addons: { type: Object, default: { // Extra features data
         allWumpuses: {type: String}
        }
    }
}));