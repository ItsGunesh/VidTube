import { Router } from "express";
import { healthcheck } from '../controllers/healthcheck.controllers.js';

const router = Router()

router.route("/testing2").get(healthcheck)
router.route("/testing").get(healthcheck)

export default router