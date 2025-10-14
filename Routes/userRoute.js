import express from 'express';
import { create_user } from '../Controllers/userController.js';

const user_route = express.Router();

user_route.post('/create', create_user);

export default user_route;