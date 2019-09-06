import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsAKYDYievgm1HhZuQTM7lcEr-RhLvlWI",
  authDomain: "karaoke-companion-c6638.firebaseapp.com",
  databaseURL: "https://karaoke-companion-c6638.firebaseio.com",
  projectId: "karaoke-companion-c6638",
  storageBucket: "",
  messagingSenderId: "48890478389",
  appId: "1:48890478389:web:17d234fb9f284a575b567c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;