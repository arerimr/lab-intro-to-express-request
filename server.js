const app = require("./app")

require("dotenv").config()
const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log("welcome to today's lab")
})