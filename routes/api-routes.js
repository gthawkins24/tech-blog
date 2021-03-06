const router = require('express').Router();

const userAPI = require('../controllers/api/user.js');
const postAPI = require('../controllers/api/post.js');
const commentAPI = require('../controllers/api/comment.js');

const withAuth = require('../utils/auth.js');

// user routes
router.get('/api/users', userAPI.getAllUsers);
router.get('/api/posts', postAPI.getAllPosts);
router.get('/api/users/:id', userAPI.getOneUser);
router.get('/api/posts/:id', postAPI.getOnePost);

// post routes
router.post('/api/users', userAPI.createNewUser);
router.post('/api/comments', commentAPI.createComment);
router.post('/api/posts', postAPI.createPost);
router.post('/api/users/login', userAPI.userLogin);
router.post('/api/users/logout', userAPI.userLogout);

// put routes
router.put('/api/posts/:id', postAPI.editPost);

// delete routes
router.delete('/api/posts/:id', postAPI.deletePost);

module.exports = router;