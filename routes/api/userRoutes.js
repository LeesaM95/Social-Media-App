const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userControllers');

// All route logic for users

//main route to get and create users
// '/api/users'
router.route('/').get(getUsers).post(createUser);

// /api/users/user:id
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)

// for a user to add friends
// can be found under '/api/users/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// for a user to delete friends off of their list
// found under '/api/users/:userId/friends/:friendId'



module.exports = router;
