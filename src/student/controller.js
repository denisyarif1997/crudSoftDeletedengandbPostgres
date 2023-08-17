// controllers/studentController.js
const pool = require('../../db'); // Import the database configuration
const queries =  require('../student/queries')


//getsemuastuden
const getStudents = (req,res) => {
  pool.query(queries.getStudents, (error, results) =>{
    if (error)throw error;
    res.status(200).json(results.rows);
  })
};

//get student by id
const getStudentsById = (req,res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsById, [id], (error, results) =>{
    if (error)throw error;
    res.status(200).json(results.rows);
  })
};

//add student
const addStudents = (req, res) => {
  const { name, email, age, dob } = req.body;

  // Validate email
  pool.query(queries.checkEmailExist, [email], (error, results) => {
    if (error) {
      console.error('Error checking email:', error);
      res.status(500).send('An error occurred.');
      return;
    }

    if (results.rows.length) {
      res.send('Email already exists');
    } else {
      // Add student to DB
      pool.query(
        'INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)',
        [name, email, age, dob],
        (insertError, insertResults) => {
          if (insertError) {
            console.error('Error adding student:', insertError);
            res.status(500).send('An error occurred.');
          } else {
            res.status(201).send('Student created successfully');
          }
        }
      );
    }
  });
};

//delete studen
const removeStudent = (req, res) => {
  const studentId = req.params.id;

  // Delete student from DB by ID
  pool.query(
    'DELETE FROM student WHERE id = $1',
    [studentId],
    (error, results) => {
      if (error) {
        console.error('Error deleting student:', error);
        res.status(500).send('An error occurred.');
      } else {
        if (results.rowCount === 0) {
          res.status(404).send('Student not found');
        } else {
          res.status(200).send('Student deleted successfully');
        }
      }
    }
  );
};

//update student
const updateStudent = (req, res) => {
  const studentId = req.params.id;
  const { name, email, age, dob } = req.body;

  // Update student in DB by ID
  pool.query(
    'UPDATE student SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5',
    [name, email, age, dob, studentId],
    (error, results) => {
      if (error) {
        console.error('Error updating student:', error);
        res.status(500).send('An error occurred.');
      } else {
        if (results.rowCount === 0) {
          res.status(404).send('Student not found');
        } else {
          res.status(200).send('Student updated successfully');
        }
      }
    }
  );
};

  

// ... Add more controller functions ...

module.exports = {
  getStudents,
  getStudentsById,
  addStudents,
  removeStudent,
  updateStudent,
  // Export more controller functions here
};
