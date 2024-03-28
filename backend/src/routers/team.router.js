import { Router } from "express";
import { sample_teams } from "../data.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(sample_teams);
});



export default router;