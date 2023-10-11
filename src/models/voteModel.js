const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    niveau:{
        type : Number,
        required: "Le niveau est requis",
        min: [1],
        max: [5],
    },
   
    music_id:{
        type: String
    },

    created_at: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('Vote', voteSchema);