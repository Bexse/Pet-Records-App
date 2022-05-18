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
import Separator from "./Separator";
import VaccineCard from './VaccineCard'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export default function PetCard({ item }) {
  //const navigation = useNavigation;
  // const {email, password, lName, fName} = item;
  console.log(item);
  //esub4@gmail.com, 5643

  //db:app.delete("/petOwners/:petOwners_id/pets/:pet_id"
  const deleteP = async () => {
    axios
      .delete(
        `http://localhost:3000/petOwners/${user._id}/pets/${user.pets[index]._id}`
      )
      .then((res) => {
        console.log("deleted");
      })
const newObj = user.pets.splice(index, 1);
    await AsyncStorage.setItem("user", JSON.stringify(newObj));
  };

  return (
    <View>
      <Separator />

      <ScrollView>
        {item.pets.map((pet, index) => (
          <View key={id} index={index}>
            <View>
              <Text>Pet Name: {pet.name}</Text>
              <Text>Type of Breed: {pet.breed} </Text>
              <Text>Date of Birth : {pet.DOB} </Text>
              <Text>Type of Weight: {pet.weight} </Text>
              <Text>Hair Color: {pet.color} </Text>
              <Text>Category: {pet.type}</Text>
            </View>
            <Button title="del" onPress={deleteP} />
            <Button title="edit" />
            <View>
              <Text>
                {pet.vaccines.map((vaccine, index) => (
                  <VaccineCard key={id} vaccine={vaccine} index={index} />
                ))}
              </Text>

              <Separator />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}



