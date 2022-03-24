
const mongoose = require("mongoose")

//create a connection to mongodb
// First, we need to define a connection. If your app uses only one database, you should use mongoose.connect.If you need to create additional connections, use mongoose.createConnection.
mongoose.connect("mongodb://localhost:27017/users_db")

module.exports = mongoose
// module.exports = mongoose.connection