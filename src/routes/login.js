import express, { Router } from "express"
import { check, validationResult } from "express-validator"
import bcrypt from "bcrypt"

const router = Router()

const user = {
  username: "Oleg",
  password: "1q2w3e4r"
}

const validationRules = [
  check("username")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 chars long")
    .isLength({ max: 12 })
    .withMessage("must not be more than 12 chars long")
    .not()
    .isEmpty()
    .withMessage("must contain username")
    .isAlphanumeric()
    .withMessage("must not contain special symbols"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("must be at least 6 chars long")
]

router.post("/login", validationRules, async (req, res) => {
  console.log(req.body)
  console.log(validationResult(req).array())
  res.header("access-control-allow-origin", "*")

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  )
  console.log(req.body.password === user.password)

  if (isPasswordCorrect) {
    console.log("Password is correct")
    // const token = jwt.sign({ user }, 'secretKey');
  } else {
    console.log("Password is wrong")
  }
})

export default router
