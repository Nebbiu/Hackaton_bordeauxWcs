'use strict'

let Comment = require('../models/comment');
let Blog = require('../models/blog');

module.exports = (router) => {

    router.post('/comments', function(req, res) {
      //on créer notre commentaire
        Comment.create(req.body, function(err, comment) {
            if (err) {
                res.sendStatus(500)
            } else {
                //on cherche le projet liée au commentaire avec la value indiqué dans le corp (req.body.projectId)
                Blog.findById(req.body.projectId, function(err, project){
                  if (err) {
                      res.sendStatus(500)
                    }else {
                      project.comments.push(comment._id)
                      project.save() // MANDATORY !!
                      //retourne le commentaire créé
                      res.json(comment)
                    }
                })
            }
        })


    })

}
