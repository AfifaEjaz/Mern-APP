import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_yJBmugP_UKU14ZiZPy7vBdMwTHaxpEs",
  authDomain: "express-api-storage-d59d7.firebaseapp.com",
  projectId: "express-api-storage-d59d7",
  storageBucket: "express-api-storage-d59d7.appspot.com",
  messagingSenderId: "404487322390",
  appId: "1:404487322390:web:17a661c2a3afbd44506e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);