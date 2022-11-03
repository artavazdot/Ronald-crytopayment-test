import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";

const firestore = getFirestore(app);

export { collection, doc, setDoc, getDoc, query, where, orderBy, getDocs, addDoc , updateDoc} from "firebase/firestore";
export { firestore };