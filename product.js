const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/appShop_db')

    .then((result)=>{
        console.log('Connected to MongoDB')
    }).catch((err)=>{
        console.log('error')
    })

const productSchema = mongoose.Schema(
{
	name: {
    type : String,
    required : true
},
	brand: {
    type : String,
    required : true
},
	price: {
    type : Number,
    required : true,
    min : 0
},
	color: {
    type : String,
    required : true
},
	size: [{
        type : String,
        required : true
    }],
	description: {
    type : String,
    required : true,
    maxlength : 150
},
	condition: {
    type : String,
    enum: ['baru', 'bekas'],
    required : true
},
	stock: {
    type : Number,
    required : true,
    min : [0,'nilai tidak boleh minus']
},
	availability: {
			online: {
                type: Boolean, 
                required: true

            },
			offline: {
                type: Boolean, 
                required
                : true

            }
		}
	},
    

)
// (3)membuat function untuk merubah 
productSchema.methods.outStock = function(){
    this.stock = 0
    this.availability.online = false
    this.availability.offline = false
    return this.save()
}
//(4) membuat function yang lebih simple
productSchema.statics.closeStore = function(){
    return this.updateMany({},{
    stock : 1,
    "availability.online" : true,
    "availability.offline" : true,
    })
}

const Product = mongoose.model('Product', productSchema)
//(3)
const changeStock = async (id)=>{
    const foundProduct = await Product.findById(id)
    await foundProduct.outStock();
    console.log('Berhasil Dirubah')
}

//(4)
Product.closeStore().then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})


// (3)changeStock('6af1a14837c692677bb3260a')


//(2)
// const product = new Product(	{
// 		"name": "Kemeja Flanel",
// 		"brand": "Hollister",
// 		"price": 750000,
// 		"color": "biru muda",
// 		"size": ["S", "M", "L"],
// 		"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 25,
// 		"availability": {
// 			"online": true,
// 			"offline": true
// 		}
// 	})

// product.save().then((result) =>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

// Product.findOneAndUpdate({name:'Kemeja Flanel'},{
//     	"name": "Kemeja Flanel",
// 		"brand": "Hollister",
// 		"price": -100000,
// 		"color": "biru muda",
// 		"size": ["S", "M", "L"],
// 		"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": -25,
// 		"availability": {
// 			"online": true,
// 			"offline": true
// 		}
// },{ new:true, runValidators:true}).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err.errors.stock.message)
// })

// Diatas runValidator digunakan untuk menggunakan validator. (case ini tidak bisa menggunakan -)
