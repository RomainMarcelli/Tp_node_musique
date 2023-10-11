const express = require('express');
const router = express.Router();

const musiqueController = require('../controllers/musiqueController');

router
    .route('/')
    .get(musiqueController.listAllMusiques)
    .post(musiqueController.createAMusique);


// /musiques/:id_musique
router
    .route('/:id_musique')
    .get(musiqueController.getAMusique)
    .patch(musiqueController.updateAMusique)
    .delete(musiqueController.deleteAMusique);

module.exports = router;   