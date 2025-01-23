import { analyseRisk } from "../controllers/analyse.controller.js";
import { Router } from "express";
export const analyseRouter=Router()

analyseRouter.route('/analyze').post(analyseRisk)
