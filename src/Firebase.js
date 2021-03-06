import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID
};

export default firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createProfileDocument = async (user, data) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (err) {
      console.log("error", err);
    }
  }
  return userRef;
};

export const createTask = async (user, data) => {
  const tasksRef = firestore.collection(`users/${user.id}/tasks`);
  try {
    let p = await tasksRef.add({ ...data });
    console.log(p.id);
    return [p.id, tasksRef];
  } catch (err) {
    console.log("error", err);
  }
};

export const getTask = async (user, id) => {
  const tasksRef = firestore.collection(`users/${user.id}/tasks`);
  try {
    let p = await tasksRef.doc(id).get();
    return { id: p.id, ...p.data() };
  } catch (err) {
    console.log("error", err);
  }
};

export const deleteTask = async (user, id) => {
  const tasksRef = firestore.collection(`users/${user.id}/tasks`);
  try {
    let p = await tasksRef.doc(id).delete();
    console.log(p);
    return;
  } catch (err) {
    console.log("error", err);
  }
};

export const toggleTask = async (user, id, value) => {
  const tasksRef = firestore.collection(`users/${user.id}/tasks`);
  try {
    let p = await tasksRef.doc(id).update({ completed: !value });
    console.log(p);
    return;
  } catch (err) {
    console.log("error", err);
  }
};

export const getAllTasks = async user => {
  const tasksRef = firestore.collection(`users/${user.id}/tasks`);
  const listItems = await tasksRef.get();
  const tasks = listItems.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
  return tasks;
};
