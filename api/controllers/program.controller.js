'use strict';

const Program = require('../models/program.model');

exports.findAll = (req, res) =>{
    Program.findAll((err, program)=>{
        console.log('controller');
        if(err)
        res.send(err);
        console.log('res', program);
        res.send(program)
    });
};

exports.create = function(req, res) {
    const new_program = new Program(req.body);
      //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Program.create(new_program, function(err, program){
            if(err)
            res.send(err);
            res.json({error:false,message:"Program added successfully!",data:program});
    });
    }
};


exports.findById = function(req, res) {
    Program.findById(req.params.id, function(err, program) {
        if (err)
        res.send(err);
        res.json(program);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Program.update(req.params.id, new Program(req.body), function(err, program) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Program successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Program.delete( req.params.id, function(err, program) {
        if (err)
        res.send(err);
        res.json({ error:false, message: 'Program successfully deleted' });
    });
};