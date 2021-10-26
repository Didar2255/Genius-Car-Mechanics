import { initializeApp } from "firebase/app";
import firebaseConfig from "./fIrebase.config";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;