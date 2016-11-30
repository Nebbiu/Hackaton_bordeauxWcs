'use strict'


let Member = require('../models/member');
let Project = require('../models/project');

module.exports = (router) => {

  router.get('/members', function(req, res) {
      Member.find({}).exec(function(err, members) {
          if (err) {
              return res.status(500).json({
                  message: err.message
              });
          }
          res.json(members);
      });
    });


    router.post('/members', function(req, res) {
      //on créer notre commentaire
      Member.create(req.body, function(err, member) {
            if (err) {
                res.sendStatus(500)
            } else {
                //on cherche le projet liée au projectaire avec la value indiqué dans le corp (req.body.projectId)
                Project.findById(req.body.projectId, function(err, project){
                  if (err) {
                      res.sendStatus(500)
                    }else {
                      project.members.push(member._id)
                      project.save() // MANDATORY !!
                      //retourne le commentaire créé
                      res.json(member)
                    }
                })
            }
        })


    })

}
