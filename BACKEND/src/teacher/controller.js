const pool = require('../../db'); // Import the database configuration
const queries = require('../teacher/queries')

const getTeacher = (req,res) => {
    pool.query(queries.getTeacher, (error, results) =>{
      if (error)throw error;
      res.status(200).json(results.rows);
    })
 };

const getTeacherById = (req,res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getTeacherById, [id], (error, results) =>{
      if (error)throw error;
      res.status(200).json(results.rows);
    })
 };

const createTeacher = (req,res) => {
    const { name, subject, email, notlp, hire_date,createdat, updatedat } = req.body;

    pool.query(queries.checkNoTlp, [notlp], (error, results) => {
      if (error)  {
        console.error('Error cheking number phone', error);
        res.status(500).send('Terjadi kesalahan');
        return;
    } 
    
    if (results.rows.length) {
      res.send('No telepon sudah ada');
    } else {
      pool.query(queries.createTeacher, [name, subject, email, notlp, hire_date, createdat, updatedat], (error, results) =>{
        if (error)throw error;
        res.status(201).json({"message": "Teacher added successfully", "body": req.body});
      })
    }
   });
  }
  
    


  

const updateTeacher = (req,res) => {
    const id = parseInt(req.params.id);
    const { name, subject, email, hire_date, updatedat } = req.body;

    pool.query(queries.updateTeacherById, [name, subject, email, hire_date, updatedat, id], (error, results) =>{
      if (error)throw error;
      res.status(200).json({"message": "Teacher updated successfully", "body": req.body});
    })
 };

const deleteTeacher = (req,res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.deleteTeacher, [id], (error, results) =>{
      if (error)throw error;
      res.status(200).json({"message": "Teacher deleted successfully"});
    })
 };


 

module.exports = {
    getTeacher,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher
};