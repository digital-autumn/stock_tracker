import express from 'express';
import db from '../config/db_conn.js';

const router = express.Router();

router.get('/dashboard', (req, res) => {
   res.send("You have reached the dashboard");
});

router.post('/register', (req, res) => {

});

router.post('/login', (req, res) => {

});

export default router;