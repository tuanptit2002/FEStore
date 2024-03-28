import axiosInstance from "../../utils/axios";

export const Register = (user) =>{
    return axiosInstance.post('/user/register', user);
}
export const LoginUser = (user) =>{
    return axiosInstance.post('/user/login', user);

}
