import axios from "axios";

export const apiUri = "http://localhost:8383/api"

const client = axios.create({
    baseURL: apiUri
})

export default client
