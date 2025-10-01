// server/models/Layout.js
const mongoose = require("mongoose");

const layoutSchema = new mongoose.Schema({
    layouts: { type: Object, required: true },
});

module.exports = mongoose.model("Layout", layoutSchema);
