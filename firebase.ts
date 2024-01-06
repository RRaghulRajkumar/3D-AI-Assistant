import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAjV4LS-Lk5b0Y-tOpOReW83WPeuz7xEk",
  authDomain: "ai-database-d4c65.firebaseapp.com",
  projectId: "ai-database-d4c65",
  storageBucket: "ai-database-d4c65.appspot.com",
  messagingSenderId: "65488228627",
  appId: "1:65488228627:web:43ba4b8431e1bad6798ae6"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};


