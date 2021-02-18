import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyAwjPwBoB8Bh3aLTUG3P4lI4zNckEaJAqE",
	authDomain: "whatsapp-3ab6c.firebaseapp.com",
	projectId: "whatsapp-3ab6c",
	storageBucket: "whatsapp-3ab6c.appspot.com",
	messagingSenderId: "822255568176",
	appId: "1:822255568176:web:75783cf02f52712fccf4f5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
