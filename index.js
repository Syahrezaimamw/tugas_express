const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port = 3000

app.use(cookieParser())
app.get('/', (req, res) => {
  res.send('NAMA : SYAHREZA IMAM WAHYUDI </br> KELAS : XI RPL </br> HELLO WORLD')
//  res.sendFile('./home.html' , {root:__dirname})
})
const nama='Syahreza Imam Wahyudi'
// app.get('/json', (req, res) => {
//   // res.json({username:nama})
//   // res.cookie('username',nama)
//   // res.cookie('username',nama,{domain:'.rimayu18.com',path:'/addres'})
//   // res.cookie('username',nama,{expires:new Date(Date.now() + 900000)})
//   // res.clearCookie('username')
//   // res.json({username:'Syahrzeza Imam Wahyudi'})
// //   res.cookie('username',"Syahreza Imam Wahyudi")
// //   res.cookie('username',"Syahreza Imam Wahyudi",{domain:'ss',path:'/addres'})
// //   res.cookie('username',"Syahreza Imam Wahyudi",{expires:new Date(Date.now() + 900000)})
// // //  res.sendFile('./home.html' , {root:__dirname})
// })
app.get('/json', (req, res) => {
  res.cookie('username','Syahreza',{
    httpOnly:true,
    secure:true,
  })
  // res.cookie('username','Syahreza',{domain:'.rimayu18.com',path:'/addres'})
  // res.send(200).json({username:'Syahreza'})
  res.json({username:'Syahreza'})
})

app.get('/profile',(req,res)=>{
  res.clearCookie('username')
  res.send('<div ><h1>NAMA : <span style="color: brown;">SYAHREZA IMAM WAHYUDI</span></h1> <h1>KELAS : <span style="color: brown;">XI RPL</span></h1> <h1>KEAHLIAN : <span style="color: brown;">SEMUA BISA</span></h1></div>')
})

app.get('/cobass', (req, res)=> {
  res.send('djadaj')
})






app.use('/',(req,res)=>{
  res.status(404)
  res.send('Maaf pak dicky halaman tidak tersedia')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})