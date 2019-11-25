const express = require('express');
const app = express();
const mongoose = require('mongoose');

// =======================
// configuration =========
// =======================
var ip = process.env.SERVER || 'localhost';
var port = process.env.PORT || '7000';

mongoose.connect('mongodb://localhost/saturn1', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const Schema = mongoose.Schema;
//Student Model
var student = new Schema({
    name:{type : String, required: false},
    password:{type: String, required:true}
})

var students = mongoose.model('students', student);

//Base route
app.get('/', (req, res)=> {
    students1 = new students({name:'shani', password:'123'}); //static data to enter 
    students1.save().then((data)=> { // called save function
        res.json({msg:'success', res: data}); // return response
    });
})

app.listen(port, ()=>{
    console.log(`server listing on port:${port}`);
})
