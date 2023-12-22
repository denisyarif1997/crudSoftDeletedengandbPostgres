const getStudents = 'SELECT * FROM student where deletedat is null';
const getStudentsById = 'SELECT * FROM student WHERE id = $1';
const checkEmailExist = 'SELECT * FROM student WHERE email = $1';
const addStudents = 'INSERT INTO student (name, email, age, dob, createdat, updatedat) VALUES ($1, $2, $3, $4, $5, $6)';
const updateStudentById = 'UPDATE student SET name = $1, email = $2, age = $3, dob = $4, updatedat = $5 WHERE id = $6';
const removeStudent = 'UPDATE student SET deletedat = NOW() WHERE id = $1';







module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExist,
    addStudents,
    removeStudent,
    updateStudentById
};