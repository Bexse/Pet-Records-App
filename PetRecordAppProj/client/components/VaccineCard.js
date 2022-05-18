import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Button,
  Image,
  Text,
  View,
 
  ViewBase,
  ScrollView,
} from "react-native";
//import { AuthContext } from "./components/AuthContext";

import Separator from "./Separator";


export default function VaccineCard({vaccine}) {
  //use vaccineadd
  const {id, drugName,DateOfAdministration} = vaccine; 
 
  const {user} = useContext(globalState);
  // double checking user. pets then vaccine
  if (user){
    let copy = {...user};
    let newU = [...copy.pets];
    newU[index].vaccines.push(newVac);
  }
//DB
  //"/petOwners/:petOwners_id/pets/:pet_id/vaccines/:vaccine_id",
const deleteV = async()=> {
  axios.delete(
    `http://localhost:3000/petOwners/${user}/pets/${user.pets[index].pet_id}`
  )
  then ((res) =>{
    res.send('deleted')
  })
// need to update async=> populate from other pc
}

const edit = ()=> {

}
  return (
    <View>
      <Text>List of Vaccines Administered </Text>
      <View key={id}>
        <Text> Vaccine Name: {vaccine.drugName}</Text>
        <Text> Date vaccine given: {vaccine.DateOfAdministration}</Text>
      </View>
      <Button onPress ={deleteV} title = 'del' /> 
      <Button title = 'edit' onPress ={edit}/> 

    </View>
  );
}