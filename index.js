const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')

    .then((result)=>{
        console.log('Connected to MongoDB')
    }).catch((err)=>{
        console.log('error')
    })

const movieSchema = mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    director: String,
    rating : Number

})

const Movie = mongoose.model('Movie', movieSchema)

// (3)find movie berdasarkan tahun
// Movie.find({year: {$gt: 2018}}).then((result) =>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

// Movie.findOne({year: {$gt: 2018},genre : 'Drama'}).then((result) =>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })



//(5)UpdateOne
// Movie.updateOne({title:'Parasite'}, {rating: 7.0}).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

//(6)Update Many
// Movie.updateMany(
//     { year: { $lt: 2019 } },
//     { $set: { rating: 8 } }
// )
// .then((result) => {
//     console.log(result)

//     return Movie.find()
// })
// .then((movies) => {
//     console.log(movies)
// })
// .catch((err) => {
//     console.log(err)
// })

//(7) Find and Update
// Movie.findByIdAndUpdate('6af16d002e07aa03062eeece',{rating : 8}, {new:true}).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

//(8) Delete One
// Movie.deleteOne({title:'Joker'}).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })


//(9)
// Movie.findByIdAndRemove({title:'Joker'}).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

// Movie.findByIdAndDelete('6af16d002e07aa03062eeece').then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })


// (4) find by id
// Movie.findById('6af16d002e07aa03062eeecf').then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })


// (1)
// const movie = new Movie({
//     tittle:'Black Panther',
//     genre:'Action',
//     director: "Ryan Coogler",
//     year: 2018,
//     rating: 7.3

// })

//(2)
// Movie.insertMany(
// [
// 	{
// 		"title": "Black Panther",
// 		"genre": "Action",
// 		"director": "Ryan Coogler",
// 		"year": 2018,
// 		"cast": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
// 		"description": "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
// 		"rating": 7.3,
// 		"image": "https://www.example.com/black_panther.jpg"
// 	},
// 	{
// 		"title": "Avengers: Infinity War",
// 		"genre": "Action",
// 		"director": "Anthony Russo, Joe Russo",
// 		"year": 2018,
// 		"cast": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
// 		"description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
// 		"rating": 8.4,
// 		"image": "https://www.example.com/avengers_infinity_war.jpg"
// 	},
// 	{
// 		"title": "Joker",
// 		"genre": "Crime",
// 		"director": "Todd Phillips",
// 		"year": 2019,
// 		"cast": ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
// 		"description": "In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: 'The Joker'.",
// 		"rating": 8.4,
// 		"image": "https://www.example.com/joker.jpg"
// 	},
// 	{
// 		"title": "Parasite",
// 		"genre": "Drama",
// 		"director": "Bong Joon Ho",
// 		"year": 2019,
// 		"cast": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
// 		"description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
// 		"rating": 8.6,
// 		"image": "https://www.example.com/parasite.jpg"
// 	},
// 	{
// 		"title": "Spider-Man: Into the Spider-Verse",
// 		"genre": "Animation",
// 		"director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
// 		"year": 2018,
// 		"cast": ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
// 		"description": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
// 		"rating": 8.4,
// 		"image": "https://www.example.com/spider_man_into_the_spider_verse.jpg"
// 	}
// ]
// ).then((result) =>{
//     console.log('Its Work')
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

//(1)
// movie.save()

// console.log(movie)