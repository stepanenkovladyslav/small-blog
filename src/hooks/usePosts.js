import { useMemo } from "react";

export const usePosts = (blogposts, searchText, activeSort) => {
    const sortedPosts = useMemo(() => {
        if (activeSort) {
            return [...blogposts].sort((a, b) =>
                a.title.toLowerCase() < b.title.toLowerCase()
                    ? -1
                    : a.title.toLowerCase() > b.title.toLowerCase()
                    ? 1
                    : 0
            );
        } else {
            return blogposts;
        }
    }, [activeSort, blogposts]);

    const sortedSearchPosts = useMemo(() => {
        if (searchText) {
            return sortedPosts.filter((blogpost) =>
                blogpost.title.startsWith(searchText)
            );
        } else {
            return sortedPosts;
        }
    }, [searchText, sortedPosts]);

    return sortedSearchPosts;
};
