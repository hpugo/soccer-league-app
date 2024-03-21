import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    credentials: true,
    orgin: ['http://localhost:3000'],
}));

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})