import React, { useContext, createContext, useEffect, useState } from "react";
import { createData, firebaseAuth } from "../firebase/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isSignUp, setIsSignUp] = React.useState(false);

  useEffect(() => {
    if (isSignUp) {
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          sessionStorage.user_id = user.uid;
          sessionStorage.email = user.email;
          sessionStorage.displayName = user.displayName;
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          });
        } else {
          setUser(null);
        }
      });
    }
  }, [isSignUp]);

  useEffect(() => {
    setUser({
      uid: sessionStorage.user_id,
      email: sessionStorage.email,
      displayName: sessionStorage.displayName,
    });
  }, []);

  const signup = (email, password, displayName) => {
    setIsSignUp(true);
    return new Promise(async (resolve, reject) => {
      try {
        await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        ).then(async (userCreated) => {
          let user = userCreated.user
          // update name
          await updateProfile(user, { displayName });
          // store in DB
          await createData("users", user.uid, {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            createdAt: user.reloadUserInfo.createdAt
          })
          resolve(userCreated);
        });
      } catch (error) {
        console.log(error);
        reject(new Error("Error signup"));
      }
    });
  };

  const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
      signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((res) => {
          sessionStorage.user_id = res.user.uid;
          sessionStorage.email = res.user.email;
          sessionStorage.displayName = res.user.displayName;
          setUser({
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
          });
          resolve(res);
        })
        .catch((error) => reject(error.message));
    });
  };

  const logout = async () => {
    setUser(null);
    sessionStorage.clear();
    // await signOut(firebaseAuth)
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
