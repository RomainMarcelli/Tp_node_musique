const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    niveau:{
        type : Number,
        required: "Le niveau est requis",
        min: 0,
        max: 5,
        get: x => Math.floor(x),
        set: x => Math.floor(x)
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