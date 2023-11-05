import axios from 'axios'

const useAxios = () => {
    const errorHandler = (error) => {
        if (error === null) return;
        alert(error?.response?.data)
    };
    const _axios = axios.create({
        baseURL: import.meta.env.BASE_URL,
        xsrfHeaderName: 'RequestVerificationToken',
        withCredentials: true,
    });
    _axios.interceptors.request.use((config) => {
        return config;
    });
    _axios.interceptors.response.use(
        (response) => {

            return Promise.resolve(response);
        },
        (error) => {
            errorHandler(error);
            return Promise.reject(error?.response?.data);
        },
    );
    return _axios;
}
export default useAxios;