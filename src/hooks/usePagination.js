import { useEffect, useState } from "react";
import PostAPI from "../API/PostAPI";
import CommentAPI from "../API/CommentAPI";

export const usePagination = (numberOfPosts, limit) => {
    const numberOfPages = Math.ceil(numberOfPosts / limit);

    const pageArr = [];

    const addPage = (numberOfPages) => {
        for (let i = 0; i <= numberOfPages - 1; i++) {
            pageArr.push(numberOfPages - i);
        }
    };
    addPage(numberOfPages);
    /*
        totalPages = 100
        limit = 10
        currentPage = 3

        [1,2,3,4,5,6,7,8,9,10]
        [3,4,5]
    */
    return pageArr.reverse();
};
