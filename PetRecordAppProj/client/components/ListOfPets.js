import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";

import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  
} from "react-native";
const Stack = createStackNavigator();
import AddVaccine from "./AddVaccine";
import AddPet from "./AddPet";
import DisplayPets from "./DisplayPets";
import Vaccines from "./Vaccines";

export default function ListOfPets({navigation, route}) {
 
  return (
    <Stack.Navigator>
        <Stack.Screen name="Display" component={DisplayPets}></Stack.Screen>
        <Stack.Screen name="AddPet" component={AddPet} />
        {/* <Stack.Screen name="Vaccines" component={Vaccines} /> */}
        <Stack.Screen name="AddVaccine" component={AddVaccine} />
    </Stack.Navigator>
  );
}


// button 


