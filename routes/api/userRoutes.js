const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/students
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/students/:studentId
router.route('/:userId')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);


router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)



module.exports = router;
