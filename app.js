//Http methods---->>>
// GET-to get the data
// POST-to create the data
//PUT-to update the data
//DELETE-to delete the data
//Http methods---->>>

//this is used only for checking of the code 
// pro ={
//     name:'lakhan',
//     age:21,
//     gender:'male',
//     cate:'sigma'
// }
//this is used only for checking of the code

const express = require('express');

const joi = require('joi');

const app = express();

app.use(express.json());

const courses = [
    
    {
        id: 1,
        name: 'Course1'
    },

    {
        id: 2,
        name: 'Course2'
    },

    {
        id: 3,
        name: 'Course3'
    }
];

//get....request....starting----->

// Route for the index page
//Route is made of url/path and a callback function
//Endpoint with route parameters---
app.get('/' , (req , res) => {
    //this is called the route handler
    res.send('Hello user');
});

//Endpoint with query parameters---
app.get('/api/courses' , (req , res) => {
    res.send(courses);
});

//Endpoint with route parameters---
// app.get('/api/courses/:year/:month' , (req , res) => {

//     //Fot text format
//     // res.send(req.params.year + ' ' + req.params.month);

//     //For JSON format
//     res.send(req.params);
// });

//Endpoint with query parameters---
app.get('/api/courses/:year/:month' , (req , res) => {
    res.send(req.query);
});

//Endpoint with query parameters---
app.get('/api/courses/:id' , (req , res) => {
    const getCourse = courses.find(c => c.id === parseInt(req.params.id));

    if(!getCourse){
        res.status(404).send('Your course is not founded');
    }
    
    res.send(getCourse);
});
//get....request....ending----->

//post....request....starting--->
//Endpoint for posting the new course---
app.post('/api/courses/post' , (req , res) => {

    const schema = {
        name: joi.string().min(3).required()
    };

    const validation_result = schema.validate(req.body , schema);

    if(validation_result.error)
    {
        res.status(400).res.send(validation_result.error.datails[0].message);
        return;//this is for no longer execution
    }

    const postCourse = {
        id: courses.length+1,
        name:req.body.name
    };

    courses.push(postCourse);
    res.send(courses);
});
//post....request....starting--->

//server call--->>>
app.listen(3000, () => {
    console.log('server has been created');
});