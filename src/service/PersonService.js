import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = (Obj) => {
    return axios.post(baseURL, Obj)
}

const update = (id, Obj) => {
    return axios.put(`{baseURL}/${id}`, Obj)
}

export default { getAll, create, update }