const express = require ("express")
const studentRoutes =  require('./src/student/routes')
const teacherRoutes =  require('./src/teacher/routes')


const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req,res) => {
    res.send('hello deni');
});

app.use('/api/v1/students', studentRoutes);

app.use('/api/v1/teacher', teacherRoutes);



app.listen(port, () => console.log(`app listening on port ${port}`));