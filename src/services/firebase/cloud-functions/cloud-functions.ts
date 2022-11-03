import { getFunctions } from "firebase/functions";
import { app } from "../firebase";

const funtions = getFunctions(app);

export { httpsCallable, httpsCallableFromURL } from "firebase/functions";
export { funtions };