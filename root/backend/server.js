import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/users.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const localhost = `http://localhost:${PORT}`;

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
   res.status(200).send({ message: "This is home" });
});

app.listen(PORT, (err) => {
   if (err)
      console.log(`There was an error lauching server.py on PORT: ${PORT} Error Message: ${err}`);
   console.log(`Launched on ${localhost}`);
});