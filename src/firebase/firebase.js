
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDV6VdU81BvoRDnxDPqnfeCN9BRvon9-YA",
//   authDomain: ,
//   projectId: ,
//   storageBucket: ,
//   messagingSenderId:,
//   appId: ,
//   measurementId: 
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
