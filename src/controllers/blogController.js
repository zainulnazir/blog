class BlogController {
    constructor(blogModel) {
        this.blogModel = blogModel;
    }

    async getAllPosts(req, res) {
        try {
            const posts = await this.blogModel.find({});
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getPostById(req, res) {
        try {
            const post = await this.blogModel.findById(req.params.id);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createPost(req, res) {
        const newPost = new this.blogModel(req.body);
        try {
            const savedPost = await newPost.save();
            res.status(201).json(savedPost);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updatePost(req, res) {
        try {
            const updatedPost = await this.blogModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletePost(req, res) {
        try {
            const deletedPost = await this.blogModel.findByIdAndDelete(req.params.id);
            if (!deletedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default BlogController;