import express from 'express';
import { getMaintenanceLog, addMaintenanceItem, editMaintenanceItem, deleteMaintenanceItem } from '../controllers/maintenanceController.js';

const router = express.Router();

router.get('/log/:userId', getMaintenanceLog) // retireive all users maintenance items
router.post('/log', addMaintenanceItem) // add a maintenance item
router.put('/log/:itemId', editMaintenanceItem) // update a maintenance item
router.delete('/log/:itemId', deleteMaintenanceItem) // delete a maintenance item

export default router;
