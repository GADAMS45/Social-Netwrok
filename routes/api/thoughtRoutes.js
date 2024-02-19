const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/students
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/students/:studentId
router.route('/:thoughtId')
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);


router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(deleteReaction)


module.exports = router;
