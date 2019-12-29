const express = require('express')
const morgan = require('morgan')

const app = express()
// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan('dev'))

//This is the final request handler
app.get('/',(req,res)=>{
    res.send('YOYOY!')
})

//exercise 1
app.get('/sum',(req,res)=>{
    const aString = req.query.a
    const a = parseInt(aString,10)
    
    const bString = req.query.b
    const b = parseInt(bString,10)

    const sum = a + b 

    res.send(`The sum of ${a} and ${b} is ${sum}`)
})

app.get('/echo',(req,res)=>{
    const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path:${req.path}`
    res.send(responseText)
})

app.get('/queryViewer',(req,res)=>{
    console.log(req.query)
    res.end() //do not send any data back to the client
})

app.get('/burgers', (req, res) => {
    res.send('Yum! We have juicy cheese burgers!');
  })

app.get('/pizza/pepperoni', (req, res) => {
res.send('Your pizza is on the way!');
})

app.get('/pizza/pineapple', (req, res) => {
    res.send('Never call again!');
  })

app.listen(8000,()=>{
    console.log('Express server is listening on port 8000!')
})