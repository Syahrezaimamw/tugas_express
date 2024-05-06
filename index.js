const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('NAMA : SYAHREZA IMAM WAHYUDI </br> KELAS : XI RPL </br> HELLO WORLD')
//  res.sendFile('./home.html' , {root:__dirname})
})
app.get('/json', (req, res) => {
  res.json({username:'Syahrzeza Imam Wahyudi'})
//  res.sendFile('./home.html' , {root:__dirname})
})
app.get('/cookies', (req, res) => {
  res.json({username:'Syahrzeza Imam Wahyudi'})
//  res.sendFile('./home.html' , {root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})