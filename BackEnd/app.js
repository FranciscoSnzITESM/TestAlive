const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.get('/login/:mail', (req, res) => {
  try{
    const mail = req.params.mail;
    const pswd = req.headers.authorization.split(' ')[1];

    if(mail === "admin" && pswd === "admin"){
      res.status(200).json({
        nombre: "Francisco",
        apellidop: "Sanchez",
        apellidom: "Salomon",
      })
    }
    else{
      res.status(404).json({response: "Usuario o contraseña incorrectos"})
    }
  }
  catch(err){
    console.log(err);
    res.status(500).send("Hubo un problema con el servidor");
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
