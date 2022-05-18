import axios from "axios";
import React, { useState, useContext } from "react";
import {
  View,
  Text,Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AuthContex } from "./AuthContext";

export default function SignUp({navigation}) {
  const [users, setUsers] = useState([]); 
//const { signUp} = useContext(AuthContex);

  const [email, setEmail] = useState("");
  const [phonenumbers, setPhonenumber] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = (await axios.get("http://localhost:3000")).data;
      //let value = await res.json();
      // console.log(res);
      setUsers(res);
    };

    fetchData();
  }, []);
  const submitForm = () => {

     const newUser = {
       fName,
       lName,
       phonenumbers,
       email,
       password,
       pets: [],
       questionsAsked: "",
     };

     const exist = users.filter(item => item = newUser.email);
     if(!exist){
       axios.post("http://localhost:3000/petOwnners/signUp", newUser);
     }
    //signUp( email, phonenumbers, fName, lName, password );
    setFName("");
    setLName("");
    setPhonenumber("");
    setPassword("");
    setFName("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholderTextColor="#003f5c"
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={styles.input}
          placeholder="Phonenumber"
          placeholderTextColor="#003f5c"
          onChangeText={(phonenumbers) => {
            setPhonenumber(phonenumbers);
          }}
          value={phonenumbers}
        />

        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(fName) => {
            setFName(fName);
          }}
          value={fName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(lName) => {
            setLName(lName);
          }}
          value={lName}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => {
            setPassword(password);
          }}
          value={password}
        />
        <Button onPress={submitForm} title="Sign Up" />

        <View styele={{ flexDirection: "row", marginTop: 20 }}>
          <Text> Have an account ? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },

  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  wrapper: {
    width: "80%",
  },
});