// const express = require('express')
// const app = express()
// const five = require('johnny-five')
// const PORT = 3000
// const path = require("path")
// const mongoose = require('mongoose')
// const User = require('./model/UserModel');

// const router = require('./routers/routes')

// app.use(express.static(path.join(__dirname,"/")))
// app.use(express.json())


// app.use('/', router)



// mongoose.connect('mongodb+srv://root:Cabinetsays17@cluster0.tgqn1sv.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
//     .then(() =>{
//         app.listen(PORT, ()=> console.log(`Listening at port: ${PORT}`))
//     })
//     .catch((error) =>{
//         console.log(error.message)
// })


const five = require('johnny-five')

// const User = require('../model/UserModel')
// const UserModel = require('../model/UserModel')



let board = new five.Board()

board.on("ready", function() {
    led = new five.Led(13);
    this.repl.inject({
      on: function() {
        led.on();
      },
      off: function() {
        led.off();
      },
      blink:function(){
          led.blink(250);
      },
      stop:function(){
          led.stop();
      }
    });
  });