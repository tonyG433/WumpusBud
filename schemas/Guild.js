const mongoose = require("mongoose");
const {Snowflake} = require("discord.js");
const prefix = require("../config.json")
const {Schema, model} = require("mongoose");

const GuildSchema = new Schema ({

    _id: { type: String }, // ID of the guild
    registeredAt: { type: Number, default: Date.now() },
    config: {
        prefix: { type: String, default: prefix }
    },
});

module.exports = model('guild-settings', GuildSchema)