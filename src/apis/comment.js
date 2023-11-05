import useAxios from "../hooks/useAxios";

const baseURI = "comments"
const useCommentService = () => {
    const axios = useAxios();
    const getCommentByPostId = (postId) => {
        return axios.get(`posts/${postId}/comments`)

    }
    const getCommentByUserId = (userId) => {
        return axios.get(`users/${userId}/comments`)
    }
    const createComment = (comment) => {
        return axios.post(baseURI, comment);
    }
    const updateComment = (comment) => {
        return axios.put(`${baseURI}/${comment.id}`, comment);
    }
    const deleteComment = (commentId) => {
        return axios.delete(`${baseURI}/${commentId}`)
    }
    return {
        getCommentByPostId,
        getCommentByUserId,
        createComment,
        updateComment,
        deleteComment
    }
}
export default useCommentService;