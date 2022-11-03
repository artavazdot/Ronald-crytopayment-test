import dev from "./.env.development.json";
import prod from "./.env.production.json";

export default (!process.env.NODE_ENV || process.env.NODE_ENV === "development") ? dev : prod;