const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    niveau:{
        type : Number,
        required: "Le niveau est requis",
        min: [0],
        max: [0],
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