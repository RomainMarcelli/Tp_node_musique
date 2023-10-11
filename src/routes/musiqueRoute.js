const express = require('express');
const router = express.Router();

const musiqueController = require('../controllers/musiqueController');

router
    .route('/')
    .get(musiqueController.listAllMusiques)
    .post(musiqueController.createAMusiques)
    .delete(musiqueController.deleteAMusique)
    .get(musiqueController.getAMusique)
    .patch(musiqueController.updateAMusique);


// /musiques/:id_musique
// router
//     .route('/musiques/:id_musique')

module.exports = router;   