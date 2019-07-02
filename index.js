const express = require('express'); //  
const app = express();             //

app.use(express.json());       //la función use tine argumento tipo json.

const courses = [              // la constante course es de tipo que recibe un array.
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {  // la función get es de tipo que recibe un string y tupla y retorna la función 
    // send recibe un string.
res.send('hello word');        
});

app.get ('/api/courses',(req, res) => {  // la función get es de tipo que recibe un string y tupla y retorna la función 
    // send.
   res.send(courses);                   

});

app.post('/api/courses',(req, res) => { //La función post es de tipo que recibe un string y tupla, y retorna 
// una constante llamado course, dentro ella estan definidas id, nombre.   
    const course = {                   
        id: course.length + 1,
        name: req.body.name
    };
    courses.push(course); 
    res.send(course);

});

app.get('/api/courses/:id', (req, res) => {  //la función get es de tipo que recibe un string y tupla, retorna función 
    //función find.
   var course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res-status(404).send('The course with given ID not Found'); 
   res.send(course);

});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log ( `puerto ${port}....`));
