const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    niveau:{
        type : Number,
        required: "Le niveau est requis",
        min: [0],
        max: [5],
        get: v => Math.floor(v),
        set: v => Math.floor(v)
    },
   
    
    created_at: {
        type: Date,
        default: Date.now
    },

    musique_id:{
        type: String
    },
});


module.exports = mongoose.model('Vote', voteSchema);