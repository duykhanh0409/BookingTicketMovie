var mongoose = require('mongoose')

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

var booking = new Schema({
    id: String,
    name: String,
    time: String,
    date: String,
    tongTien: {type: Number},
    cinema: String,
    seats: {type: Number},
    client: String
});

module.exports.createBooking = function(req, res){
    res.render("booking.pug");
}

module.exports.bookingPostData = function(req, res){
    var booking_schedule = mongoose.model('bookings', booking);
    const dataset = {
        id: req.body.id,
        name: req.body.name,
        time: req.body.time,
        date: req.body.date,
        tongTien: req.body.tongTien,
        cinema: req.body.cinema,
        seats: req.body.seats,
        client: req.body.client
    }
    const newBlogPost = new booking_schedule(dataset);
    newBlogPost.save((error) => {
        if (error) {
            console.log("something happened");
        } else {
            console.log("data has been saved")
        }
    });
    res.render("booking"); 
}

module.exports.getBookingData =async function(req, res){
    var booking_data = mongoose.model("bookings", booking);
    var item = await booking_data.find();
    console.log(item);
    res.json(item);
}

module.exports.getBookingDataByID = async function(req, res) {
    var booking_data = mongoose.model("bookings", booking);
    var idOfBooking_movie = req.params.id;
    var item = await booking_data.find({id: idOfBooking_movie});
    res.json(item);
}