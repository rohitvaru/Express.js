//creat the server using express.js
const express = require('express')
// import router from './routes/products.router'
const server = require('./routes/products.router')
// import server from "./routes/products.router"
const app = express()
const port = 3000

// const products_router = require('./routes/products.router')

app.get('/', (req, res) => {
  res.send('Hello Express.js')
})

//middleware or set router

app.use("/api/products",server);




const App = async()=>{
  try{
      app.listen(port,()=>{
        console.log(`http://localhost:${port}`)
      })
  }
  catch(error){
    console.log(error)
  }
}
App();

