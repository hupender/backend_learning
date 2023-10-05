import mongoose from "mongoose";
// connect to mongoose and create a db if not exists already
mongoose.connect("mongodb://localhost:27017/personDb",{useNewUrlParser: true});
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
    }
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
// to save singular entries
// p1.save();

// insert into database
await person.insertMany([p1,p2,p3])
.then((results)=>{
    console.log("Successfully inserted");
    console.log(results);
})
.catch((error)=> {
    console.log(error);
});

//finds object from db
await person.find({name:"hupender"})
.then((results)=> {
    if(results.length>0) {
        console.log("Successfully found elemenst");
        console.log(results);
    }
    else {
        console.log("No match found");
    }
})
.catch((error)=> {
    console.log(error);
});


// update value in db
await person.updateOne({name:"jbsf"},{name:"sachin",age:"22"})
.then((results)=> {
    console.log("successfully updated");
})
.catch((error)=> {
    console.log(error);
});

//delete enties from db
await person.deleteOne({name: "sef"})
.then((results)=> {
    console.log(`Successfully deleted ${results.deletedCount} entries`);
})
.catch((error)=>{
    console.log(error);
});

