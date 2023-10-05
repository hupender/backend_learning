import mongoose from "mongoose";
// connect to mongoose and create a db if not exists already
mongoose.connect("mongodb://localhost:27017/personDb",{useNewUrlParser: true});

// schema1
const fruitSchema=new mongoose.Schema({
    name: String,
    rating: Number
});
const fruit=mongoose.model("fruit",fruitSchema);

// schema 2 we will be making  a relationship between these two
const personSchema= new mongoose.Schema({
    name: {
        type: String,
        // in the required filed we can add a message in case condition fails
        required: true
    },
    age: {
        type: Number,
        min: 1,
        max: 100
    },
    favourite_fruit: fruitSchema
});
// the collection name will be the plural of person we can define custom name using collection_name attribute in model
const person=mongoose.model("person",personSchema);

const p1=new person({
    name:"hupender",
    age:21
});
const p2=new person({
    name:"jbsf",
    age:19
});
const p3=new person({
    name:"sef",
    age:17
});


const fruit1=new fruit({
    name: "Apple",
    rating: 8
});
// fruit1.save();

const p4 =new person({
    name:"ram",
    age:28,
    favourite_fruit: fruit1
});
// p4.save();

// to save singular entries
// p1.save();

// // insert into database
// await person.insertMany([p1,p2,p3])
// .then((results)=>{
//     console.log("Successfully inserted");
//     console.log(results);
// })
// .catch((error)=> {
//     console.log(error);
// });

// //finds object from db
// await person.find({name:"hupender"})
// .then((results)=> {
//     if(results.length>0) {
//         console.log("Successfully found elemenst");
//         console.log(results);
//     }
//     else {
//         console.log("No match found");
//     }
// })
// .catch((error)=> {
//     console.log(error);
// });


// // update value in db
// await person.updateOne({name:"jbsf"},{name:"sachin",age:"22"})
// .then((results)=> {
//     console.log("successfully updated");
// })
// .catch((error)=> {
//     console.log(error);
// });

// //delete enties from db
// await person.deleteOne({name: "sef"})
// .then((results)=> {
//     console.log(`Successfully deleted ${results.deletedCount} entries`);
// })
// .catch((error)=>{
//     console.log(error);
// });

const fruit2 = new fruit({
    name: "banana",
    rating: 6,
});
// fruit2.save();

person.updateOne({name: "hupender"},{favourite_fruit: fruit2})
.then((results)=> {
    console.log("Favourite fruit updated");
})
.catch((error)=> {
    console.log(error);
})
