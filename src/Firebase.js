// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQpFsgBsrrlim2awpsIZZgLtb0f_7JI8I",
  authDomain: "finalpresentation-6047f.firebaseapp.com",
  projectId: "finalpresentation-6047f",
  storageBucket: "finalpresentation-6047f.firebasestorage.app",
  messagingSenderId: "986430689727",
  appId: "1:986430689727:web:66ce27d5b8ba0afa94110a",
  measurementId: "G-F2KPP5E0SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Initialize Analytics (optional - you can remove this if you don't need it)
const analytics = getAnalytics(app);

// Export auth and googleProvider so your components can use them
export { auth, googleProvider };