import express, { json } from "express"
// import jwt from "jsonwebtoken"
import "dotenv/config"

import indexRouter from "./routes/index"
import loginRouter from "./routes/login"

const app = express()

app.use(json({ extended: true }))

app.use("/api", indexRouter)
app.use("/api", loginRouter)

const port = 3000
app.listen(port, () => console.log(`Server listening at: ${port}!`))
