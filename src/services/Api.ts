import axios from "axios"

export const BaseUrl = "http://localhost:3335/"

export const api = axios.create({
    baseURL: "http://localhost:3335/",
})