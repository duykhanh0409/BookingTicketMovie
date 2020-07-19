
var express=require('express')

var router=express.Router()

var controller=require('../controller/booking.controller')


router.get('/create', controller.createBooking)

router.post("/postData", controller.bookingPostData)

router.get('/data', controller.getBookingData)

router.get('/data/:id', controller.getBookingDataByID)


module.exports=router