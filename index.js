const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!  ')
  res.send('NAMA : Syahreza Imam Wahyudi')
  res.send('KELAS : XI RPL')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})