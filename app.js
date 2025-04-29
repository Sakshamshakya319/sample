const path = require('path')
const express = require('express')
const { title } = require('process')

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public/views')
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))


app.get('', (req,res)=>{
    const students = [
        { name: 'Alice', age: 22 },
        { name: 'Bob', age: 23 },
        { name: 'Charlie', age: 21 }
    ];

    res.render('index',{
        title:'Home Page',
        name:'Weather Asistant',
        students: students
    })
})

app.get('/about', (req,res)=>{
    res.render('about',{
        title:'About',
        name:'This is about page'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title:'Help',
        name:'This is help page'
    })
})
app.get('/contact', (req,res)=>{
    res.render('contact',{
        title:'Contact',
        name:'Contact here'
    })
})

app.listen(4000, () => {
    console.log('Server is up on port 4000.')
})