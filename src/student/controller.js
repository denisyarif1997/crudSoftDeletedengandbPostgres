// controllers/studentController.js
const pool = require('../../db'); // Import the database configuration
const queries =  require('../student/queries')

// Get all students
// const getStudents = async (req, res) => {
//   try {
//     const { rows } = await pool.query('SELECT * FROM students');
//     res.json(rows);
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Create a new student
// const createStudent = async (req, res) => {
//   const { name, age, major } = req.body;
//   try {
//     const { rows } = await pool.query(
//       'INSERT INTO students (name, age, major) VALUES ($1, $2, $3) RETURNING *',
//       [name, age, major]
//     );
//     res.json(rows[0]);
//   } catch (error) {
//     console.error('Error creating student:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

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

  

// ... Add more controller functions ...

module.exports = {
  getStudents,
  getStudentsById,
  addStudents,
  // Export more controller functions here
};
