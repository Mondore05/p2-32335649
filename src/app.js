const express = require('express')
const app = express()
const path = require('path')

//rutas
const routes = require('./routes/index.routes')
app.use(routes)

//archivos estaticos 
app.use((req, res) => {
    res.sendFile(path.join(path.join(__dirname,'../pubic/index.html')))
})
app.listen(3000, ()=> {
    console.log('servidor a la espera')
})