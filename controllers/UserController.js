const five = require('johnny-five')

const User = require('../model/UserModel')
const UserModel = require('../model/UserModel')



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


const homePage = () => {
    res.send('index.html')

}


const test = async(req, res) => {
    console.log(req.body.test)
    res.status(200).json({
        message: req.body.test
    })
}


const verifyLogin = async(req, res) => {
    const user = await UserModel.find({
        username: req.body.username,
        password: req.body.password
    })

    if(user.length >= 1) {

       

        res.status(200).json({
            message: "Success"
        })


    } else {
        res.status(404).json({
            message: "Failed"
        })
    }
}



module.exports = {
    homePage,
    test,
    verifyLogin
}