const express = require('express');
const BlogController = require('../controllers/blogController');

const router = express.Router();
const blogController = new BlogController();

function setRoutes(app) {
    router.get('/posts', blogController.getAllPosts.bind(blogController));
    router.get('/posts/:id', blogController.getPostById.bind(blogController));
    router.post('/posts', blogController.createPost.bind(blogController));
    router.put('/posts/:id', blogController.updatePost.bind(blogController));
    router.delete('/posts/:id', blogController.deletePost.bind(blogController));

    app.use('/api', router);
}

module.exports = setRoutes;