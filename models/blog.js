const mongoose = require("mongoose");

//Schema setup
const Schema = mongoose.Schema
const blogSchema = new Schema({
    Title: {
        type: String,
        required: true,
    },
    AuthorName: String,
    AuthorEmail: String,
    AuthorLinkedIn: String,
    Category: String,
    Content: String,
    ShortDescription: String,
    Tags: String,
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    Link: String,
    FileName: {
        type: String,
        default: "",
    }
});
module.exports = mongoose.model("Blog", blogSchema);