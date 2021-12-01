const mongoose = require("mongoose");
const {Snowflake} = require("discord.js");
const prefix = require("../../config.json")

module.exports = mongoose.model("Guild", new mongoose.Schema({

    _id: { type: String }, // ID of the guild
    registeredAt: { type: Number, default: Date.now() },
    prefix: { type: String, default: prefix }, // The prefix for the guild
    addons: { type: Object, default: { // Extra features data

        }
    }
}));