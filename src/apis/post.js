import useAxios from "../hooks/useAxios";

const baseURI = "posts"
const usePostService = () => {
    const axios = useAxios();
    const getPost = () => {
        return axios.get(baseURI)
    }
    const getPostByCategoryId = (categoryId) => {
        return axios.get(`categories/${categoryId}/posts`)
    }
    const getPostByAuthorId = (authorId) => {
        return axios.get(`accounts/${authorId}/posts`);
    }
    const createPost = (post) => {
        return axios.post(baseURI, post);
    }
    const updatePost = (post) => {
        return axios.put(`${baseURI}/${post.id}`, post);
    }
    const deletePost = (postId) => {
        return axios.delete(`${baseURI}/${postId}`)
    }
    return {
        getPost,
        getPostByCategoryId,
        getPostByAuthorId,
        createPost,
        updatePost,
        deletePost
    }
}
export default usePostService;