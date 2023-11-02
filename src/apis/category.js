import useAxios from "../hooks/useAxios";

const baseURI = "categories"
const useCategoryService = () => {
    const axios = useAxios();
    const getCategory = (categoryId) => {
        let uri = baseURI;
        if (categoryId) {
            uri += "/" + categoryId
        }
        return axios.get(uri)
    }
    const createCategory = (category) => {
        return axios.post(baseURI, category);
    }
    const updateCategory = (category) => {
        return axios.put(`${baseURI}/${category.id}`, category);
    }
    const deleteCategory = (categoryId) => {
        return axios.delete(`${baseURI}/${categoryId}`)
    }
    return {
        getCategory,
        createCategory,
        updateCategory,
        deleteCategory
    }
}
export default useCategoryService;