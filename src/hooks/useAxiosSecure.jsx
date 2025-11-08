import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000"
})
const axiosSecure = () => {
    instance.interceptors.request.use(config => {
        console.log(config);
        return config;
    })
    return instance;
}
export default axiosSecure;