import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput, TouchableOpacity,
} from "react-native";

export default function AddPet({navigation}) {
  const [pets, setPets] = useState([]); 

  const [breed, setBreed] = useState("");
  const [DOB, setDOB] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  // const [vaccine, setVaccines] = useState([])

  const addPet = () => {
    setPets((prev) => [...prev, { breed, DOB, color, name, type, weight }]);
    setBreed("");
    setDOB("");
    setColor("");
    setName("");
    setType("");
    setWeight("");
    // since this represent the logged user
    axios.post("http:/localhost:3000/petOwners/:petOwners_id/pets", {
      breed:breed,
      DOB:DOB, 
      color:color, 
      name:name,
      type:type,
      weight:weight
    });
  };

  return (
    <View>
      <TextInput
        value={breed}
        style={styles.input}
        placeholder="breed"
        onChangeText={(breed) => setBreed(breed)}
      />

      <TextInput
        style={styles.input}
        placeholder="DOB"
        onChangeText={(DOB) => {
          setDOB;
        }}
        value={DOB}
      />

      <TextInput
        style={styles.input}
        placeholder="type"
        onChangeText={(type) => {
          setType(type);
        }}
        value={type}
      />
      <TextInput
        placeholder="color"
        style={styles.input}
        onChangeText={(color) => {
          setColor(color);
        }}
        value={color}
      />
      <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={(name) => {
          setName(name);
        }}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="weight"
        onChangeText={(weight) => {
          setWeight(weight);
        }}
        value={weight}
      />
      <TouchableOpacity onPress={addPet}>
        <Text> Add Pet </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});