const express = require('express')
const app = express()

const routes = require('./routes/index.routes')
app.use(routes)

app.listen(3000, ()=> {
    console.log('servidor a la espera')
})