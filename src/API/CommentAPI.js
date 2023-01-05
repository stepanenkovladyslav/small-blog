import axios from "axios";

class CommentAPI {
    static async getComments(id, limit, page) {
        const resp = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
            {
                params: {
                    _limit: limit,
                    _page: page,
                },
            }
        );
        const data = await resp.data;
        const allCommentsCount = resp.headers["x-total-count"];
        return [data, allCommentsCount];
    }
}

export default CommentAPI;
