import "dotenv/config";
import axios from "axios";

const host = process.env.API_HOST;
const port = process.env.API_PORT;
const prefix = process.env.API_PREFIX;

const blogClient = axios.create({
    baseURL: `http://${host}:${port}${prefix}`,
});

export default blogClient;