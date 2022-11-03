import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import env from "../../env";

const app = initializeApp(env.firebaseConfig);

const analyticsRef = getAnalytics(app);

export { app, analyticsRef };