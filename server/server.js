import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hej');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

