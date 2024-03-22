const server = require('./app')

// require('dotenv').config
const port = 3001


server.listen(port,()=>{
    console.log(`server listening on port: ${port}`)
})