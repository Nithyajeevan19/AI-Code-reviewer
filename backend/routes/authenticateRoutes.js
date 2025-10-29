import { Router } from "express";
import { authenticateUserLogin } from '../controllers/authenticate.js'
import { authenticateUserRegister } from '../controllers/authenticate.js'

const authenticateRoute = Router()

authenticateRoute.post('/register', authenticateUserRegister)
authenticateRoute.post('/login', authenticateUserLogin)

export default authenticateRoute