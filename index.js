const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('NAMA : syahreza imam w')
//  res.sendFile('./home.html' , {root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})