import axios from "axios";
import jwt from "jwt-decode"
import config from "../config.json"

import Cookies from "universal-cookie/cjs/Cookies";
const cookies = new Cookies()

async function axiosPost(endpoint, data, contentType = "application/json", token = cookies.get("JWT_TOKEN")) {

    const client = jwt(token)

    const url = `${config.apiUrl}/${client.type}/${endpoint}`
    try {
        const response = await axios.post(url, data, { headers: { "Content-Type": contentType, "x-access-token": token } })
        return { error: null, response }
    } catch (error) {
        return { error: error, response: null }
    }
}


async function login(address, data, contentType = "application/json",) {

    const url = `${config.apiUrl}/${address}`
    try {
        const response = await axios.post(url, data, { headers: { "Content-Type": contentType, } })

        return { error: null, response }
    } catch (error) {
        return { error: error, response: null }
    }
}

async function axiosGet(endpoint, query, contentType= "application/json", token = cookies.get("JWT_TOKEN")){
    const client = jwt(token)
    const url = `${config.apiUrl}/${client.type}/${endpoint}?${query}`

    try {
        const response = await axios.get(url, { headers: { "Content-Type": contentType, "x-access-token": token } })
        return { error: null, response }
    } catch (error) {
        return { error, response: null }
    }
}

async function axiosPut(endpoint, data, contentType= "application/json", token = cookies.get("JWT_TOKEN")) {
    const client = jwt(token)
    const url = `${config.apiUrl}/${client.type}/${endpoint}`

    try {
        const response = await axios.put(url, data, {headers : { "Content-Type": contentType, "x-access-token": token }})
        return { error: null, response }
    } catch (error) {
        return { error, response: null }
    }

}

export {
    axiosPost,
    login,
    axiosGet,
    axiosPut
}

