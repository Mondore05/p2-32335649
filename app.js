const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('hola edriana xd')
})
app.listen(3000, ()=> {
    console.log('servidor a la espera')
})