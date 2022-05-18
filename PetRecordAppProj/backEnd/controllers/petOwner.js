// const PetOwnerModel = require("../models/petOwner");

// // do second level and firs level array CRUD => refer rich db documents.


// /*

// {"email": "esubex@gmail.com", 
//  "phoneNumbers": 303030, 
//   "fName": "esi", 
//    "lName": "belew",
//     "password": 1234,  
//     "questionAsked": "What are the best methods in town",  
//     "pets": [   
//                 { 
//                   "_id": 1, 
//                   "breed": "husky", 
//                   "DOB": -2024,  
//                 "color": "white",
//                 "type": "dog", 
//                 "name": "rynan",   
//                 "weight": 34,   
//                 "vaccines": [  {  "drugName": "Tylenol",  "DateOfAdministraton": new Date("2020-12-20") }      ]   
//                 }, 

//   { 
//                   "_id": 2, 
//                   "breed": "husky2", 
//                   "DOB": 2020,  
//                 "color": "white",
//                 "type": "dog", 
//                 "name": "rynan",   
//                 "weight": 40,   
//                 "vaccines": [  {  "drugName": "Tylenol2",  "DateOfAdministraton": new Date("2020-12-20") }      ]   
//                 }, 


//             ]
//   }

// ]

// // first level CRUD Add Pets {bread, dob, color, type, name, weight}

// url ' petRecords/:petRecords_id/pets/'
// */

// exports.getAllPets = async (req, res) => {
// console.log('hello ')
//   const documents = await PetOwnerModel.find({});
//   console.log(documents);
//   res.send(documents);
// };

// // exports.addPet = async (req, res) => {

// //   let query = { _id: parseInt(req.params.petRecords._id) };
// //   let update = { pets: req.body };
// //   await req.db.updateOne(query, { $push: update });
// //   const newobj = {}; //with all parameters.
// //   //await medication.save();
// //   res.send(documents);
// // };

// // exports.getPetByName = async (req, res) => {
// //   const documents = await PetModel.find({
// //     petName: req.params.petName,
// //   });

// //   res.send(documents);
// // };

// // exports.getPetById = async (req, res) => {
// //   const documents = await PetModel.find({ _id: req.params.id });
// //   res.send(documents);
// // };
// // exports.updatePetByID = async (req, res) => {
// //   const documents = await PetModel.findOne({ _id: req.params.id });
// //   res.send(documents);
// // };
// // exports.deletePetByID = async (req, res) => {
// //   const petToDelete = await PetModel.findOne({ _id: req.params.id });
// //   res.status(200).json(petToDelete);

// //   res.send(documents);
// // };
