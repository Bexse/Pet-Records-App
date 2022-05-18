import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import * as SMS from "expo-sms";

export default function VetSupport() {

  const [question, setQuestion] = React.useState("");
  const [smsServiceAvailable, setSmsServiceAvailable] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");

// when screen mounts
  React.useEffect(() => {
    checkIfServiceAvailable();
  }, []);


  //sms is available or not? 
   const checkIfServiceAvailable = async () => {
     const isAvailable = await SMS.isAvailableAsync();
     if (isAvailable) {
       setSmsServiceAvailable(true);
     }
   };


   // take care of the questions
    const handleQuestion = async () => {
      if (smsServiceAvailable && phoneNumber && question) {
        await SMS.sendSMSAsync(phoneNumber.toString(), question);
      }
    };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.formController}>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="number-pad"
          placeholder="Enter phone number here"
        />
        <TextInput
          style={styles.input}
          value={question}
          onChangeText={(text) => setQuestion(text)}
          keyboardType="default"
          placeholder="Enter message here"
        />

        <TouchableOpacity onPress={handleQuestion}>
          <Text styel={styles.container}>Send Your Questions</Text>
        </TouchableOpacity>
        
        
      </View>
    </View>
  );
}
 

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: 50
  },
  formController: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10
  }
});

// based on doc