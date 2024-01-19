import { Router } from "express";
const router = Router();

router.get("/",(req,res) => {
    console.log('hello world')
    res.send('hello world')
});

export default router;
