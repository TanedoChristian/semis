const express = require('express')
const app = express()
const five = require('johnny-five')
const PORT = 3000
const path = require("path")
const mongoose = require('mongoose')
const User = require('./model/UserModel');

app.use(express.static(path.join(__dirname,"/")))
app.use(express.json())



app.get('/', (req, res) => {
    res.render("index.html")
});

app.post('/login',async (req, res) => {
    let message = ""
    const user = await User.find({
        username: req.body.username,
        password: req.body.password
    })

    if(user.length >= 1) {
        message = "success"
    } else {
        message = "error"
    }

    res.status(200).json({
        message: message
    })
})


app.get('/users', async (req,res) => {
   
})




mongoose.connect('mongodb+srv://root:Cabinetsays17@cluster0.tgqn1sv.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() =>{
        app.listen(PORT, ()=> console.log(`Listening at port: ${PORT}`))
    })
    .catch((error) =>{
        console.log(error.message)
})
