const express = require("express");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const mykey = 'reactnative';
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db;

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (!db) {
    client.connect(function (err) {
      db = client.db("petRecords-db");
      req.db = db.collection("petOwners");

      next();
    });
  } else {
    req.db = db.collection("petOwners");
    next();
  }
});

app.get("/", (req, res) => {
  req.db.find({}).toArray((err, data) => res.json(data));
  
});


//get petOwner by id
app.get("/petOwners/:petOwners_id", async (req, res) => {
  let query = { _id: ObjectId(req.params.petOwners_id) };
  console.log(query);
  await req.db.find(query).toArray((err, data) => res.json(data));


});



//get pets
app.get("/petOwners/:petOwners_id/pets", async (req, res) => {
  let query = { _id: ObjectId(req.params.petOwners_id) };
  console.log(query);
  await req.db.find(query).toArray((err, data) => res.json(data));

  req.db.find({}).toArray((err, data) => res.json({ sucess: true, data }));
});

// add user
app.post("/petOwners/signUp", async (req, res) => {
  const {
    email,
    phonenumbers,
    fName,
    lName,
    password,
    pets: [],
    questionsAsked,
  } = req.body;

  let user = {
    email: email,
    phonenumbers: phonenumbers,
    fName: fName,
    lName: lName,
    password: bcrypt.hash(password, 8),
    pets: [],
    questionsAsked: questionsAsked,
  };

  await req.db.insertOne(user, (err, result) => res.json(result));
});

// login users 

app.post("/petOwners/signIn", async (req, res) => {

  const { email, password } = req.body;
  let hashedPw = bcrypt.hash(password, 8);
  let petOwner  = {
    email: email,
    password: hashedPw
  };

  // find user if it exists 

  const existinguser = await req.db.findOne({ email: req.body.email });
  if(!existinguser){
    res.send('Please provide valid username and password')
  } else {
    // compare password 
   const token = jwt.sign({email:existinguser.email}, mykey);
   let userToken = {
     accessToken: accessToken,
     user: existinguser
   }
   res.send(JSON.stringify(userToken));
  }
  
  // more logic here
  // await req.db.insertOne(user, (err, result) => res.json(result));
});


// cs471 node
// make sure they have the proper authorization before => do crud
const authrize = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(400).send("please try again");

  try {
    const token = authHeader.split(" ")[1];

    let user = await jwt.verify(token, secretKey);
    // if verified, we have the right person hence the request will contain user
    req.user = user;
    next();
  } catch (e) {
    return res.status(400).send("Error");
  }
};
// Add Pet
app.post("/petOwners/:petOwners_id/pets", async (req, res) => {
  await req.db.updateOne(
    { _id: ObjectId(req.params.petOwners_id) },
    { $push: { pets: req.body } }
  );

  req.db.find({}).toArray((err, data) => res.json({ sucess: true, data }));
});

// Update PET by ID

app.patch("/petOwners/:petOwners_id/pets/:pet_id", async (req, res) => {
  let query = {
    _id: ObjectId(req.params.petOwners_id),
    "pets._id": req.params.pet_id
  };
  let update = {
    "pets.$.name": req.body.name,
    "pets.$.breed": req.body.breed,
    "pets.$.DOB": req.body.DOB,
    "pets.$.color": req.body.color,
    "pets.$.type": req.body.type,
    "pets.$.weight": req.body.weight,
  };
  await req.db.update(query, { $set: update });
  req.db.find({}).toArray((err, data) => res.json(data));
});

// Delete Pets by ID
app.delete("/petOwners/:petOwners_id/pets/:pet_id", async (req, res) => {
  let query = { _id: ObjectId(req.params.petOwners_id) };
  let update = { pets: { _id: req.params.pet_id} };
  await req.db.updateOne(query, { $pull: update });

  req.db.find({}).toArray((err, data) => res.json(data));
});


// second level CRUD for Vaccine
//add vaccine

app.post("/petOwners/:petOwners_id/pets/:pet_id", async (req, res) => {
  const { petOwners_id, pet_id } = req.params;
  let query = { _id: ObjectId(petOwners_id) };
  let update = { $push: { "pets.$[pet].vaccines": req.body } };
  let option = { arrayFilters: [{ "pet._id": pet_id }] };

  await req.db.updateOne(query, update, option);

  req.db.find({}).toArray((err, data) => res.json({ sucess: true, data }));
});


//update vaccine
app.patch(
  "/petOwners/:petOwners_id/pets/:pet_id/vaccines/:vaccine_id",
  async (req, res) => {
    const { petOwners_id, pet_id, vaccine_id } = req.params;
    // make it dynamic

    let query = { _id: ObjectId(petOwners_id) };
    let update = {
      $set: {
        "pets.$[pet].vaccines.$[vaccine].drugName": req.body.vaccine.name,
        "pets.$[pet].vaccines.$[vaccine].DateOfAdministraton":
          req.body.vaccine.DateOfAdministraton
      },
    };
    let option = {
      arrayFilters: [
        { "pet._id": pet_id },
        { "vaccine._id": vaccine_id},
      ],
    };

    await req.db.updateOne(query, update, option);
    req.db.find({}).toArray((err, data) => res.json(data));
  }
);

// Delete vaccine

app.delete(
  "/petOwners/:petOwners_id/pets/:pet_id/vaccines/:vaccine_id",
  async (req, res) => {
    const { petOwners_id, pet_id, vaccine_id } = req.params;

    let query = { _id: ObjectId(petOwners_id) };
    let update = {
      $pull: { "pets.$[pet].vaccines": { _id: vaccine_id} },
    };
    let option = { arrayFilters: [{ "pet._id": pet_id}] };
    await req.db.updateOne(query, update, option);

    req.db.find({}).toArray((err, data) => res.json(data));
  }
);


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

app.listen(3000, () => console.log("listening to 3000..."));









