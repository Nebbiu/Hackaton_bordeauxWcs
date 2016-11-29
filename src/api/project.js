'use strict'
//All the get, project, put/create Restfull/crud methods.
// project Model of Mongoose requiring the project.js file from src/models
let Project = require('../models/project');


module.exports = (router) => {
    //mounting router method to get crud restFull api
    router.get('/projects', function(req, res) {
        Project.find({}, function(err, projects) {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }
            res.json(projects);
        });
    });

    //get project by id
    router.get('/projects/:id', function(req, res) {
        Project.findById(req.params.id, function(err, project) {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }
            res.json(project);
        });
    });

    //project method with router prefix
    router.post('/projects/', function(req, res) {
        let project = req.body;
        // project data to database using the project model
        Project.create(project, function(err, project) {
            if (err) {
                return res.status(500).json({
                    err: err.message
                });
            }
            res.json({
                'project': project,
                message: 'Project Created'
            });
        });
    });

    //TODO: Add PUT route to uodate existng entries

    // add :id params at end of /projects route.
    router.put('/projects/:id', function(req, res) {
        //id variable assigned request.parameters.identification of express modeule
        let id = req.params.id;
        // project variable is locally assigned the requested body
        let project = req.body;
        //
        if (project && project._id !== id) {
            return res.status(500).json({
                err: 'Ids do not match!'
            })
        }
        //project model of mongoose finds id and update.
        Project.findByIdAndUpdate(id, project, {
            new: true
        }, function(err, project) {
            if (err) {
                return res.status(500).json({
                    err: err.message
                });
            }
            res.json({
                'project': project,
                message: 'Project Updated'
            });
        });
    });

    //TODO: Add DELETE route to create new entries
    router.delete('/project/:id', function(req, res) {
        Project.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.status(500).json({
                    err: err.message
                });
            } else {
                res.sendStatus(200);
            }
        })
    })
}
