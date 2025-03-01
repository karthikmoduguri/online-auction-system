
import { Router } from "express";

import { createAuction, getAuctions, placeBid } from "../controllers/auctioncontroller.js";
import { protect } from "../middlewares/authmiddleware.js";
const router = Router();

router.post("/create", protect,createAuction);
router.get("/getauctions", getAuctions);
router.post("/bid/:id", placeBid);

export default router;