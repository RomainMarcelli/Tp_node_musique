const Vote = require('../models/voteModel');
const Musique = require('../models/musiqueModel');

exports.listAllVotes = async (req, res) => {
    try {
        const votes = await Vote.find({ musique_id: req.params.id_musique });
        res.status(200).json(votes);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erreur serveur' })
    }
}