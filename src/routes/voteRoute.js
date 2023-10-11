const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');

router
    .route("/musiques/:id_musique/votes")
    .get(voteController.listAllVotes)
    .post(voteController.createAVote);


// /votes/:id_vote
router
    .route('/votes/:id_vote')
    .get(voteController.getAVote)
    .delete(voteController.deleteAVote)
    .patch(voteController.updateAVote);

router
    .route("/musiques/:id_musique/result")
    .get(voteController.resultVote);

module.exports = router;   