
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBoGfQDXWlO9rPYYMQlVYYKT-8xr1NjoOs",
  authDomain: "ecommerce-7beae.firebaseapp.com",
  projectId: "ecommerce-7beae",
  storageBucket: "ecommerce-7beae.appspot.com",
  messagingSenderId: "908429713175",
  appId: "1:908429713175:web:d687c4aacfa3904c746152"
};

const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}