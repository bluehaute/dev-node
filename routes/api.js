const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const sample_airbnb = require('../models/sample_airbnb');

// get a list of students from the database
router.get('/airbnb',function(req,res,next){
    sample_airbnb.find({}).then(function(sample_airbnb){
        res.send(sample_airbnb);
    }).catch(next);
});

// add a new student to database
router.post('/students',function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
});

// update a student in the database
router.put('/students/:id',function(req,res,next){
    Student.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        Student.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
});

// delete a student in the database
router.delete('/students/:id',function(req,res,next){
    Student.findOneAndDelete({_id: req.params.id}).then(function(student){
        res.send(student);
    });
});

module.exports = router;