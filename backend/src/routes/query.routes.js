import { Router } from "express";
import { submitQuery, getAllQueries, replyToQuery, deleteQuery } from "../controllers/query.controller.js";
const router = Router();

router.route('/submit').post(submitQuery);
router.route('/').get(getAllQueries);
router.route('/reply/:id').post(replyToQuery);
router.route('/:id').delete(deleteQuery); 

export default router;