const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/maintenance', userController.maintenance);
router.post('/checkin', userController.checkin);
router.post('/checkout', userController.checkout);
router.get('/get-rooms', userController.GetRooms);
router.get('/get-maintenance',userController.GetMaintenance);
router.get('/get-checkin',userController.GetCheckin);
router.get('/get-checkout',userController.GetCheckout);
router.get('/get-users',userController.GetUsers);
router.post('/room-number', userController.CheckinRoom);
module.exports = router;