const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musiqueSchema = new Schema({
    url:{
        type : String,
        required: "L'url est requis"
    },
    nom: {
        type : String,
        required: "Le nom est requis"
    },
    prenom: {
        type : String,
        required: "Le prénom est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Musique', musiqueSchema);