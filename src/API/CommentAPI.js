import axios from "axios";

class CommentAPI {
    static async getComments(id) {
        const resp = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        const data = await resp.data;
        return data;
    }
}

export default CommentAPI;
