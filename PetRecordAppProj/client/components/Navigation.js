// import "react-native-gesture-handler";
// import React, { useContext } from "react";

// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// // import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// // const Tab = createMaterialBottomTabNavigator();
// //import { AuthProvider } from "./components/AuthContext";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StyleSheet, Text, View } from "react-native";
// //import components here
// import { AuthContext } from "./AuthContext";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// import Home from "./Home";
// import ListOfPets from "./ListOfPets";
// import SignIn from "./SignIn";
// import AddPet from "./AddPet";
// import AddVaccine from "./AddVaccine";
// import SignUp from "./SignUp";
// import VetSupport from "./VetSupport";

// export default function Navigation() {
//   const { user } = useContext(AuthContext);
//   //console.log(user);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <>
//           {/* {user.access_token == null ? ( */}
//           <>
//             <Stack.Screen name="SignIn" component={SignIn} />
//             <Stack.Screen name="SignUp" component={SignUp} />
//           </>
//           {/* ) : ( */}
//           <>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="Pets" component={ListOfPets} />
//             <Stack.Screen name="VetSupport" component={VetSupport} />
//             <Stack.Screen name="AddVaccine" component={AddVaccine} />
//             <Stack.Screen name="AddPet" component={AddPet} />
//           </>
//           {/* )} */}
//         </>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
