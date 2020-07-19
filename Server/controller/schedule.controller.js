var mongoose = require('mongoose')

var url = process.env.MONGODB_URI

mongoose.connect(url,
    {
        dbName: 'cinema',
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

mongoose.connection.on("connected", () => {
    console.log("mongoose is connected")
})

const Schema = mongoose.Schema;

var movie_schedule = new Schema({
    id: String,
    name: String,
    schedule_time: [
            { 
                ds_cinema: [
                        {
                            name: String,
                            showtime: [String]
                        }
                    ],
                date: String
            }
        ]
});

module.exports.createSchedule = function (req, res) {
    res.render("schedule");
}

module.exports.schedulePostData = function (req, res) {

    const dataset = {
        id: req.body.id,
        name: req.body.name,
        category: req.body.category,
        year_of_production: req.body.year_of_production,
        director: req.body.director,
        actors: req.body.actor,
        premiere_date: req.body.premiere_date,
        description: req.body.description,
        duration: req.body.duration,
        language: req.body.language,
        image: img
    };
    var movie = mongoose.model("movie", movie_schema);
    const newBlogPost = new movie(dataset);
    newBlogPost.save((error) => {
        if (error) {
            console.log("something happened");
        } else {
            console.log("data has been saved")
        }
    });
    res.render("movie")          
}

module.exports.getScheduleData = async function (req, res) {
    var schedule_movie = mongoose.model("schedules", movie_schedule);
    var item = await schedule_movie.find();
    console.log(item);
    res.json(item);
}

module.exports.getScheduleDataByID = async function (req, res) {
    var schedule_movie = mongoose.model("schedules", movie_schedule);
    var idOfSchedule_movie = req.params.id;
    var item = await schedule_movie.find({id: idOfSchedule_movie});
    console.log(item);
    res.json(item);
}