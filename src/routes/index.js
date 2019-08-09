import express, { Router } from "express"
const router = Router()

/* GET home page. */
router.get("/", (req, res) => res.send(console.log("Home")))

export default router
