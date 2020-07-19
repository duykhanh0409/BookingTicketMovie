
var mongoose = require('mongoose')
var path = require('path');

var url = process.env.MONGODB_URI

// connect
mongoose.connect(url,
    {
        dbName: 'cinema',
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

mongoose.connection.on("connected", () => {
    console.log("mongoose is connected")
})

//  // schema
const Schema = mongoose.Schema;

var movie_schema = new Schema({
    id: String,
    name: String, 
    category: String,
    year_of_production: String,
    director: String,
    actors: String,
    premiere_date: String,
    description: String,
    duration: String,
    language: String,
    image: [String]
});

module.exports.createMovie = function(req, res){
    res.render("movie");
}

module.exports.moviePostData = function(req, res){
    var img = [req.body.avatar1, req.body.avatar2];
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

module.exports.getMovieData = async function(req, res) {
    var movie = mongoose.model("movies", movie_schema);
    var item = await movie.find();
    res.json(item);
}

module.exports.getMovieDataByID = async function(req, res) {
    var movie = mongoose.model("movies", movie_schema);
    var idOfMovie = req.params.id;
    var item = await movie.find({id: idOfMovie});
    res.json(item);
}

module.exports.getDataPicture = function(req, res){
    console.log("hello");
    var imageName = req.params.name;
    res.sendFile(path.join(__dirname, `../public/images/movie/${imageName}`));
    console.log(imageName)
}