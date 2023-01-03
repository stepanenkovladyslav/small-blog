import axios from "axios";

class PostAPI {
    static async getAllPostsForPage(page, limit) {
        const pageNumber = page;
        const resp = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    _limit: limit,
                    _page: pageNumber,
                },
            }
        );
        const postsCount = resp.headers["x-total-count"];
        const posts = await resp.data;
        return [posts, postsCount];
    }

    static async getAllPosts() {
        const resp = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await resp.data;
        return data;
    }
    static async getOnePost(id) {
        const resp = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const post = await resp.data;
        return post;
    }
}

export default PostAPI;
