import express from 'express';
import { getEducation } from '../controller/education_controller.js';

const router = express.Router();
router.get('/', getEducation);

export default router;