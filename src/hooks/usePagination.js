export const usePagination = (page, numberOfPosts, limit) => {
    const numberOfPages = Math.round(numberOfPosts / limit);
    let pageArr = [];

    const addPage = (page, numberOfPages) => {
        if (page >= 2 && page <= numberOfPages - 1) {
            for (let i = page - 2; i <= page + 2; i++) {
                if (i <= numberOfPages && i > 0) {
                    pageArr.push(i);
                }
            }
        } else if (page <= 2) {
            for (let i = page; i <= page + 2; i++) {
                pageArr.push(i);
            }
        } else if (page == numberOfPages) {
            for (let i = page; i >= numberOfPages - 2; i--) {
                pageArr.push(i);
                pageArr = pageArr.sort((a, b) => (a > b ? 1 : -1));
            }
        }
    };
    addPage(page, numberOfPages);
    return pageArr;
};

/* To display all pages
    for (let i = 0; i <= numberOfPages - 1; i++) {
                pageArr.push(numberOfPages - i);
            }
        };
        */
