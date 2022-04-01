require('dotenv').config()
const express = require('express') //this call express to the module
const app = express () // this instantiate express under app


app.get ('/', (req,res) => {
    res.send("hello world")
})

app.get('*', (req, res) =>{
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)