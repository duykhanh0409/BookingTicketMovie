var express=require('express')

var router=express.Router()

var controller=require('../controller/schedule.controller')


router.get('/create', controller.createSchedule)


router.post('/PostData', controller.schedulePostData)


router.get("/data", controller.getScheduleData)

router.get("/data/:id", controller.getScheduleDataByID)

module.exports=router