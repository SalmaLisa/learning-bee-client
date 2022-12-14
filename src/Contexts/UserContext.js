import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update userInfo
  const updateUserInfo = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //handle login
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //github sign in
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

// reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  //add user monitor
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    updateUserInfo,
    handleLogin,
    logOut,
    googleSignIn,
    gitHubSignIn,
    resetPassword
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
