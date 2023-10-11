const Musique = require('../models/musiqueModel');
// const Post = require('../models/postModel');

exports.listAllMusiques = async (req, res) => {
    try {
        const musiques = await Musique.find({});
        res.status(200);
        res.json(musiques);

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' })
    }
}


exports.createAMusique = async (req, res) => {
    const newMusique = new Musique(req.body);
    try {
        const musique = await newMusique.save();
        res.status(201);
        res.json(musique);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur" })
    }
};

exports.deleteAMusique = async (req, res) => {
    // const postDelete = new Post(req.body);

    try {
        await Musique.findByIdAndDelete(req.params.id_musique);
        res.status(204);
        res.json({ message: 'Musique supprimé.' });
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
};



exports.getAMusique = async (req, res) => {
    try {
        const musique = await Musique.findById(req.params.id_musique);
        res.status(200);
        res.json(musique);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.updateAMusique = async (req, res) => {
    try {
        const musique = await Musique.findByIdAndUpdate(req.params.id_musique, req.body, { new: true });
        res.status(200);
        res.json(musique);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}