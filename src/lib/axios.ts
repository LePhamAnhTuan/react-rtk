import axios from "axios";

const token = localStorage.getItem("token") || null
const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token ? token : ""}`
    }

})

export default http
