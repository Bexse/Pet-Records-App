import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import AddPet from "./AddPet";
import globalState from "./globalState";
import PetCard from "./PetCard";
import Vaccines from "./Vaccines";

export default function DisplayPets({ navigation, route }) {
  const [petOwners, setPetOwners] = useState([]);

  useEffect(() => {
    (async () => {
      let url = "http://localhost:3000";
      const doc = await fetch(url);
      const res = await doc.json();
      setPetOwners(res);
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 300 }}>
      <View style={styles.container}>
        <Text>Welcome !</Text>

        <FlatList
          data={petOwners}
          renderItem={({ item, index }) => (
            <PetCard item={{ ...item, index }} />
          )}
          keyExtractor={(item) => item.id}
        />

        <Button
          title="Add Pet"
          onPress={() => {
            navigation.navigate("AddPet");
          }}
        />

        <Button
          title="Add Vaccine"
          onPress={() => {
            navigation.navigate("AddVaccine");
          }}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
