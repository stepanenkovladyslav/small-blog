import { useState } from "react";

export const useRequest = (request) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const funcRequest = async (page) => {
        try {
            setLoading(true);
            await request(page);
        } catch (e) {
            console.log(e.message);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return [funcRequest, loading, error];
};
