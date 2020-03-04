//using express
const express = require('express')
const app = express()
const PORT = 8080;

//import the logger - middleware example
const logger = require('./middleware.js')
//Middleware layers can be added one by one in multiple invocations of use, or even all at once in series with one invocation.
//.use Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
//Since path defaults to “/”, middleware logger mounted without a path will be executed for every request to the app.
app.use(logger)

//can be series of middleware: app.use(r1, r2); ...r1 calls next()

//look for the route that matches /
app.get('/', function (req, res) {
    res.send('Hello Sri!')
})

//read and print params
//http://localhost:8080/movie/bheeshma/seatnum/c23
//single callback function
app.get('/movie/:movieName/seatnum/:seatNum', function (req, res) {
    res.send(req.params)
})

//multiple callback function
app.get('/mcallback', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hi from second callback!')
    }
)

//array of functions with multiple callbacks
var cb0 = function (req, res, next) {
    console.log('callback 0')
    next()
  }
  
var cb1 = function (req, res, next) {
    console.log('callback 1')
    // next()
}
  
app.get('/example/multiplecb', [cb0, cb1], function (req, res, next) {
        console.log('the response will be sent by the next function ...')
        next()
    }, function (req, res) {
        res.send('Hi from second callback!')   
    }
)

//run the server and listen on port until error/stopped
app.listen(PORT, () =>  {
    console.log('Server running/')
})
