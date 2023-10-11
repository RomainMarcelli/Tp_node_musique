const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');

router
    .route("/musiques/:id_musique/votes")
    .get(voteController.listAllVotes);
    // .post(voteController.createAVote);


// /votes/:id_vote
// router
//     .route('/:id_vote')
//     .get(voteController.getAVote)
//     .patch(voteController.updateAVote)
//     .delete(voteController.deleteAVote);

module.exports = router;   