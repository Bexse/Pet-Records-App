import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,

} from "react-native";
import { AuthContext } from "./AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



export default function AddVaccine() {
  // const [vaccines, setVaccines] = useState([]);
  const [vaccineName, setVaccineName] = React.useState("");
  const [dateOfAdmin, setDate] = React.useState();

  const addVaccine = async () => {

    let newVac = {vaccineName, dateOfAdmin};
    // setVaccines((prev) => [...prev, { vaccineName, dateOfAdmin }]);
  const {user} = useContext(globalState);
  // double checking user. pets then vaccine
  if (user){
    let copy = {...user};
    let newU = [...copy.pets];
    newU[index].vaccines.push(newVac);
  }

  // async storage 
  const async = await AsyncStorage.setItem('user', JSON.stringify(newVac))

//db
  // db "/petOwners/${petOwners_id}/pets/${pet_id}/vaccines/${vaccine_id}"
  //"/petOwners/${petOwners_id}/pets/${petOwners.pets[index].pet_id}

try{
  axios
  .post (`http://localhost:3000/petOwners/${petOwners_id}/pets/${petOwners.pets[index].pet_id}`,
        newVaccine)

  .then((res) => {
    res.send('added!') 
  })
} catch(e) {
  console.log(e)
}  
    setVaccineName("");
    setDate("");
  };

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(vaccineName) => setVaccineName(vaccineName)}
          value={vaccineName}
          placeholder="Vaccine name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(dateOfAdmin) => setDate(dateOfAdmin)}
          value={dateOfAdmin}
          placeholder="Vaccine admin date"
        />
        <TouchableOpacity onPress={addVaccine}>
          <Text> Add Vaccine </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
