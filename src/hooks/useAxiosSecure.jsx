import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const instance = axios.create({
    baseURL: "http://localhost:5000"
})
const AxiosSecure = () => {
    const { user } = useAuth();
    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use(config => {
            config.headers.authorization = `Bearer ${user?.accessToken}`;
            console.log(config);
            return config;
        });
        return () => {
            instance.interceptors.request.eject(requestInterceptor);
        }
    }, [user]);
    return instance;
}
export default AxiosSecure;