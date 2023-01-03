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
        const allComments = resp.headers["x-total-count"];
        return [data, allComments];
    }
}

export default CommentAPI;
