import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();
// create a global functions

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const signUp = (email, phonenumbers, fName, lName, password) => {
    setIsLoading(true);

    axios
      .post("http://localhost:3000/petOwners/signUp", {
        email,
        phonenumbers,
        fName,
        lName,
        password,
      })
      .then((res) => {
        let user = res.data;
        setUser(user); // check this later
        AsyncStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const signIn = (email, password) => {
    setIsLoading(true);

    axios
      .post("http://localhost:3000/petOwners/signIn", {
        email,
        password,
      })
      .then((res) => {
        let user = res.data.user;
        //console.log(user)
        // console.log('this should contain the access token and the user email and password ')

        setUser(user); // check this later
        //console.log(user, "autocontext")
        AsyncStorage.setItem("user", JSON.stringify(user)); // save them to be //used second time
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };
   const logout = () => {
     setIsLoading(true);

     axios
       .post("http://localhost:3000/petOwners/logout"
         ,
         {},
         {
           headers: { Authorization: `Bearer ${user.access_token}` },
         }
       )
       .then((res) => {
          console.log(res.data);
         AsyncStorage.removeItem("user");
         setUserInfo({});
         setIsLoading(false);
       })
       .catch((e) => {
         console.log(e);
         setIsLoading(false);
       });
  };
  // 
  const isLoggedIn = async () => {
    try {
      let user = await AsyncStorage.getItem("user");
      user = JSON.parse(user);

      if (user) {
        setUser(user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  //signUp,
  return (
    <AuthContext.Provider value={{ isLoading, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
