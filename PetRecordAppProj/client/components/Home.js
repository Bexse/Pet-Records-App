import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//import Separator from "./Separator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import ListOfPets from "./ListOfPets";
import VetSupport from "./VetSupport";

export default function Home({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pets"
        component={ListOfPets}
        option={{ title: "List of pets" }}
      />
      <Tab.Screen name="VetSupport" component={VetSupport} />
    </Tab.Navigator>
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


/*


import React from 'react'
import { Text, View, Button } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import AboutMe from "./AboutMe";
import Services from "./Services";


const Stack = createStackNavigator();

export default function Home() {
  return (
      <Stack.Navigator> 
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="About me" component={AboutMe} />
      </Stack.Navigator>


  )
}
*/





