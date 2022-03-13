import axios from 'axios'
const baseURL = '/api/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = (Obj) => {
    return axios.post(baseURL, Obj)
}

const update = (id, Obj) => {
    return axios.put(`${baseURL}/${id}`, Obj)
}

const remove = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove }