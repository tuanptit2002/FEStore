// fetchAllItem.js
import axiosInstance from "../../utils/axios";

export const fetchAllItem = () => {
    return axiosInstance.get('/item/get/all');
};
export const fetchItemById = (id) =>{
    return axiosInstance.get(`/item/get/item/${id}`)
}

