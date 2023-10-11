const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    url:{
        type : String,
        required: "le nom est requis"
    },
    nom: {
        type : String,
        required: true
    },
    prenom: {
        type : String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    // post_id: {
    //     type: String,
    // }
});

module.exports = mongoose.model('Comment', commentSchema);