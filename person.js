//Mencoba Virtual Property di Mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')

    .then((result)=>{
        console.log('Connected to MongoDB')
    }).catch((err)=>{
        console.log('error')
    })


const personSchema = mongoose.Schema({
    firstName : String,
    lastName: String
})

personSchema.virtual ('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    firstName : 'Harry',
    lastName : 'Potther'
})

console.log(person.lastName)