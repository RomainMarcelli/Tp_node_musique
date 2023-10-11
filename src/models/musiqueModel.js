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

    mail:{
        type: String,
        unique: true,
        required: "Le mail est requis",
        validate: {
            validator: function (x) {
              const Email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
              return Email.test(x);
            },
            message: "Le mail ne correspond pas"
        }
    }, 

    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Musique', musiqueSchema);