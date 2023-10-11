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

exports.createAVote = async (req, res) => {
    try {
        const musique = await Musique.findById(req.params.id_musique);
        const newVote = new Vote({ ...req.body, musique_id: req.params.id_musique });

        try {
            const vote = await newVote.save();
            res.status(201).json(vote);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erreur serveur" });
        }

    }  catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur serveur (musique_id inexistant)." });
    }
}

exports.getAVote = async (req, res) => {
    try {
        const vote = await Vote.findById(req.params.id_vote);
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur (getAvote)" })
    }
}

exports.updateAVote = async (req, res) => {
    try {
        const vote = await Vote.findByIdAndUpdate(req.params.id_vote, req.body, { new: true });
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.deleteAVote = async (req, res) => {
    // const postDelete = new Post(req.body);

    try {
        await Vote.findByIdAndDelete(req.params.id_vote);
        res.status(204);
        res.json({ message: 'Vote supprimé.' });
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
};