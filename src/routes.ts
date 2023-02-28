import { Router } from 'express';

const router = Router();

router.post("/listDevices");
router.post("/addNewDevice");
router.post("/alterDevice");
router.post("/deleteDevice");

export default router;