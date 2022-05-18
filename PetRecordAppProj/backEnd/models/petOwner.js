// const mongoose = require("mongoose");

// // const PetSchema = mongoose.Schema({
// //   breed: { type: String },
// //   DOB: { type: Date },
// //   color: { type: String },
// //   type: { type: String },
// //   name: { type: String },
// //   weight: { type: Number },
// //   vaccines: [],
// // });


// // const PetModel = mongoose.model("pet", PetSchema );

// // module.exports = PetModel;

// // const PetSchema = mongoose.Schema({
// //   breed: { type: String },
// //   DOB: { type: Date },
// //   color: { type: String },
// //   type: { type: String },
// //   name: { type: String },
// //   weight: { type: Number },
// //   vaccines: [
// //     { drugName: { type: String }, DateOfAdministraton: { type: Date } },
// //   ],
// // });

// const PetOwnerSchema = mongoose.Schema({
//   email: { type: String },
//   phoneNumbers: { type: Number },
//   fName: { type: String },
//   lName: { type: String },
//   password: { type: String },
//   pets: [
//     {
//       breed: { type: String },
//       DOB: { type: Date },
//       color: { type: String },
//       type: { type: String },
//       name: { type: String },
//       weight: { type: Number },
//       vaccines: [
//         { drugName: { type: String }, DateOfAdministraton: { type: Date } },
//       ],
//     },
//   ],
//   questionAsked: { type: String },
// });

// const PetOwnerModel = mongoose.model("petOwner", PetOwnerSchema);

// module.exports = PetOwnerModel;
