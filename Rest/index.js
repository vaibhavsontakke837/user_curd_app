const express = require("express");
const app = express()
const port = process.env.PORT || 5000;

const conn = require("./db")
const cors = require("cors")


app.use(cors())
app.use(express.json())

// connect mongodb
conn.connection.on("connected", (err) => {  
    if (err) {
        console.error(err)
    } else {
        console.log("Connected to Mongo Db")
    }
})

//show the api information on home page
app.get("/", (req, res) => {
    res.send(`<marquee><h1>This is users api information</h1></marquee>`)
})

//save use information in databse
app.use("/user",require("./routes/users"))

//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
