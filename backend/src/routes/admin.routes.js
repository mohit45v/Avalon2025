import { Router } from "express";
import {
    adminLogin,
    getDashboardStats,
    verifyParticipant,
    rejectParticipant,
    markForReview,
    sendEmailToParticipant
} from "../controllers/admin.controller.js";

const router = Router();

router.post('/adminlogin', adminLogin);
router.get('/dashboard-stats', getDashboardStats);
router.post('/verify/:id', verifyParticipant);
router.post('/reject/:id', rejectParticipant);
router.post('/mark-review/:id', markForReview);
router.post('/send-email/:id', sendEmailToParticipant);

export default router;