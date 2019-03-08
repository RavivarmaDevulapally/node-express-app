const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('Welcome!')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  res.send('<h1> Big World!</h1>')
})


app.get('/typename/:id',  (req, res) =>{
  res.send('Hello! My name is '.fontcolor("green").fontsize(900) + req.params.id.fontsize(900).fontcolor("green"))
})

app.get('/getimage/',  (req, res) =>{
  res.send('Clickhere to go to image'.fontcolor("blue").fontsize(900).link("https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"))
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

