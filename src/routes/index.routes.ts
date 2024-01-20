import { Router, Application } from "express";
import creatorRoute from '../routes/creator.routes';
import editorRoute from '../routes/editor.routes';

const router = Router();

router.use("/editor",editorRoute);
router.use("/creator", creatorRoute);


export default router;
