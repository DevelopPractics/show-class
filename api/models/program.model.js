'use strict';

const dbConn = require('../../config/db.config');

var Program = (program) =>{
    this.codigo         = program.codigo;
    this.name_program   = program.name_program;
    this.description    = program.description;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};

Program.create = function (newProg, result) {
    dbConn.query("INSERT INTO programs set ?", newProg, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Program.findById = function (id, result) {
    dbConn.query("Select * from programs where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Program.findAll = function (result) {
    dbConn.query("Select * from programs", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('program : ', res);
            result(null, res);
        }
    });
};

Program.update = function(id, program, result){
    dbConn.query("UPDATE programs SET codigo=?,name_program=?,description=? WHERE id = ?", [program.codigo, program.name_program, program.description, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Program.delete = function(id, result){
    dbConn.query("DELETE FROM programs WHERE id = ?", [id], function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(null, err);
    }
    else{
        result(null, res);
    }
    });
};

module.exports = Program;