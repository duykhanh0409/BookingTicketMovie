var express=require('express')

var router=express.Router()

var controller=require('../controller/movie.controller')


router.get('/create', controller.createMovie)


router.post('/PostData', controller.moviePostData)

router.get("/data", controller.getMovieData)

router.get("/data/:id", controller.getMovieDataByID)

router.get('/picture/:name', controller.getDataPicture)


module.exports=router