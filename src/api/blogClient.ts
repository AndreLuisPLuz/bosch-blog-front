import axios from "axios";

const blogClient = axios.create({
    baseURL: "http://localhost:420/api/v1",
});

export default blogClient;