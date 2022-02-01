const express = require("express")
const connectToMongo = require("./db")
const cors = require("cors")

const port = 8001
connectToMongo()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Server is running live at port : https://localhost:${port}`)
})