import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn({ navigation }) {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = (await axios.get("http://localhost:3000")).data;
      //let value = await res.json();
      // console.log(res);
      setUsers(res);
    };

    fetchData();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        const origin = await Location.reverseGeocodeAsync(location.coords);

        setOrigin(origin[0].country);
      }
    })();
  }, []);

  // provide context

  //const { isLoading, signIn } = useContext(AuthContext);

  const handleLogin = async () => {
    if (origin === "United States") {
      let user = {
        email,
        password,
      };
    }

    // check token too =>multifactor => db
    await axios.post("localhost:3000/petOwners/signIn", user).then((res) => {
      user = res.data;
      // if (petOwner) {
      //   navigation.navigate("Home");
      // }
    });
    // trial one petowner with token firsone user

    let petOwner = "";
    for (let user of users) {
      if (user.email === email) {
        petOwner = user;
      }
    }
    if (petOwner) {
      navigation.navigate("Home");
    }

    try {
      //save the token in the app store.
      const jValue = JSON.stringify(petOwner);
      await AsyncStorage.setItem("user", jValue);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={{ marginBottom: 40 }}> Welcome </Text>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={email}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password."
          value={password}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <Button onPress={handleLogin} title="Login" />
        {/* <Button onPress={signIn} title="Login" /> */}

        <View styles={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.wrapper}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//esub4@gmail.com, 5643

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "70%",
  },

  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
});
