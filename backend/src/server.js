import express from 'express';
import cors from 'cors';
import teamRouter from './routers/team.router.js'
import userRouter from './routers/user.router.js'

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    orgin: ['http://localhost:3000'],
}));

app.use('/api/teams', teamRouter);
app.use('/api/users', userRouter);



const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
});