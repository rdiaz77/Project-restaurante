const express = require('express') //this call express to the module
const app = express () // this instantiate express under app

app.get ('/', (req,res) => {
    res.send("hello world")
})

app.listen(3000)