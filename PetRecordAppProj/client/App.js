import "react-native-gesture-handler";
 import React, { useContext } from "react";
 import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
//import components here
 import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Home from "./components/Home";
import ListOfPets from "./components/ListOfPets";
import SignIn from "./components/SignIn";
import AddPet from "./components/AddPet";
import AddVaccine from "./components/AddVaccine";
import SignUp from "./components/SignUp";
import VetSupport from "./components/VetSupport";
import { AuthProvider } from "./components/AuthContext";

//import { AuthContext } from "./components/AuthContext";
//import Navigation from "./components/Navigation";

export default function App() {
 //
  return (
     <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {user.access_token == null ? ( 
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (  
            <>
              <Stack.Screen name="Home" component={Home} />
              {/* <Stack.Screen name="Pets" component={ListOfPets} /> */}
              {/* <Stack.Screen name="VetSupport" component={VetSupport} /> */}
              {/* <Stack.Screen name="AddVaccine" component={AddVaccine} /> */}
              {/* <Stack.Screen name="AddPet" component={AddPet} /> */}
            </>
           ) }
        </Stack.Navigator>
        
      </NavigationContainer>

     
    </AuthProvider>
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


 