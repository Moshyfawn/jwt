import express from "express"
// import jwt from "jsonwebtoken"
import "dotenv/config"

const app = express()

const user = {
  username: "Oleg"
}

app.get("/", (req, res) => res.send(`Logged in as, ${user.username}`))

const port = 3000
app.listen(port, () => console.log(`Server listening at: ${port}!`))
