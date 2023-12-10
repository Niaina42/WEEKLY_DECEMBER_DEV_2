import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

// Devrais etre dans un .env mais en raison du processus
// de deploiement je met ici
const firebaseConfig = {
  apiKey: "AIzaSyCnFGzXAv7ivgxtHuegEvNoDWUa-GQJuto",
  authDomain: "supermessenger-36265.firebaseapp.com",
  projectId: "supermessenger-36265",
  storageBucket: "supermessenger-36265.appspot.com",
  messagingSenderId: "226001568190",
  appId: "1:226001568190:web:1a7dbc8884e095e25f39ef",
  measurementId: "G-ZPN02DK7N8"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const firestoreDB = getFirestore(firebaseApp);

const createData = (docName, docId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await setDoc(doc(firestoreDB, docName, docId), data);
      resolve(response);
    } catch (error) {
      reject(new Error("Erreur add data"));
      console.log(error);
    }
  });
};

const updateData = (docName, docId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await updateDoc(doc(firestoreDB, docName, docId), data);
      resolve(response);
    } catch (error) {
      reject(new Error("Erreur add data"));
      console.log(error);
    }
  });
};

export {
  firebaseApp,
  firebaseAuth,
  firestoreDB,
  createData,
  updateData,
};