const express = require('express')
const router = express.Router()
const Post = require('../models/posts')



router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})

router.get('/home', async (req, res) => {
    try{
        const posts = await Post.find().limit(5);
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})



router.get('/:PostId', async (req, res) => {
    try{
        const posts = await Post.findById(req.params.PostId)
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})



router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})


router.patch('/:postId', async (req, res) => {
    try{
        const patchedPost = await Post.updateOne(
            {_id : req.params.postId},
            {$set: 
                {image: req.body.image}
            })
        res.json(patchedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})


router.patch('/like/:postId', async (req, res) => {
    try{
        const patchedPost = await Post.updateOne(
            {_id : req.params.postId},
            {$set: 
                {likes: req.body.likes}
            })
        res.json(patchedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})


router.patch('/dislike/:postId', async (req, res) => {
    try{
        const patchedPost = await Post.updateOne(
            {_id : req.params.postId},
            {$set: 
                {dislikes: req.body.dislikes}
            })
        res.json(patchedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})




router.post('/', async (req, res) => {
    const posts = new Post({
        Country: req.body.Country,
        Sight: req.body.Sight,
        Description: req.body.description,
        AvgStars: parseFloat(req.body.AvgStars),
        address: req.body.address,
        latitude: parseFloat(req.body.latitude),
        longitude: parseFloat(req.body.longitude),
        image: req.body.image
    });
    console.log(posts)
    try{
        const savedPost = await posts.save();
        res.json(savedPost);
    }
    catch(err) {
        res.status(404);
    }
})


module.exports = router;