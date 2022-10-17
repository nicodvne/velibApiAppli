import express from "express";
import {callVelibAction} from "../controllers/velibController.js";

const router = express.Router();

router.get('/velib', () => {
    callVelibAction();
  }
)

export default router;