import { useEffect, useState } from "react";
import { MENU_API_URL } from "./mockdata";

const useRestaurantMenuHook = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId])

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetch(MENU_API_URL + resId);
            const json = await data.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { resInfo, loading, error };
}

export default useRestaurantMenuHook;