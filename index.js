import express  from "express";
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();

const PORT = 7677;

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res)=> {
  res.send('Welcome to the Users API:')
})

app.listen(PORT, ()=> console.log(`App is running at PORT: http://localhost:${PORT}`))