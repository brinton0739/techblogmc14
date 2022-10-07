const router = require('express').Router();
const { Post } = require('../../model');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, (req, res) => {
    console.log('##### ', req.body, '#####');
    Post.create({
        title: req.body.title,
        post_content: req.body.postContent,
        user_id: req.session.user_id,
    })
    .then((results) => {
        if (results) {
            res.status(200).json(results.get());
        } else {
            res.status(400).json('post could not be created');
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put("/", withAuth, (req, res) => {
  Post.update({
    title: req.body.title,
    post_content: req.body.postContent
  },
  {
    where: {
        id: req.body.postId,
    },
    returning: true,
    plain: true
  })
  .then((results) => {
    if (results) {
      res.status(200).json(results);
    } else {
      res.status(400).json("post could not be created");
    }
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete("/:post_id", withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.post_id
        }
    })
    .then(() => {
        res.status(202).end();
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;