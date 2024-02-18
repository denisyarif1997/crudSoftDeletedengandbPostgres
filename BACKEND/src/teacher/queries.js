const getTeacher = 'select * from teacher';
const getTeacherById = 'SELECT * FROM teacher WHERE id = $1';
const checkNoTlp = 'SELECT * FROM teacher WHERE notlp = $1';
const createTeacher = 'INSERT INTO teacher (name, subject, email, notlp, hire_date, createdat, updatedat) VALUES ($1, $2, $3, $4, $5, $6, $7)';
const updateTeacherById = 'UPDATE teacher set name = $1, subject = $2, email = $3, hire_date = $4, updatedat = $5 where id = $6';
const deleteTeacher = 'UPDATE teacher SET deletedat = NOW() WHERE id = $1';



module.exports = {
    getTeacher,
    getTeacherById,
    createTeacher,
    updateTeacherById,
    deleteTeacher,
    checkNoTlp
}