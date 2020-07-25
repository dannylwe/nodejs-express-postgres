import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import bookRoutes from './server/src/routes/BookRoutes';

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/books', bookRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;
// when a random route is requested
app.get('*', (req, res) => res.status(200).send({ message: 'Welcome to the begining of the universe' }));

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});

export default app;