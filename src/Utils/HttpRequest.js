import axios from 'axios'


const httprequest = axios.create({
    baseURL: 'http://tiktok.fullstack.edu.vn/api/',
})


export const get = async (path, options = {}) => {
    const response = await httprequest.get(path, options)
    return response.data

}
export default httprequest