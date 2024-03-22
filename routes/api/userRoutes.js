const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
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
  .delete(deleteUser)

// for a user to add friends
// can be found under '/api/users/:userId
router.route('/:userId/friends').post(addFriend);

// for a user to delete friends off of their list
// found under '/api/users/:userId/friends/:friendId'

router.route('/users/:userId/:friendId').delete(removeFriend)



module.exports = router;
