/* eslint-disable no-undef */
import axios from "axios"

const baseURL = process.env.REACT_APP_BASE_API
const getAllProducts = async() => {
    const subURL = 'products'
    const response = await axios.get(`${baseURL}/${subURL}`)   
    return await response.data
}

const ResourceHub = {
    getAllProducts,
}

export default ResourceHub