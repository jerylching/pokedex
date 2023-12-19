import { useState, useEffect } from 'react';

const useFetchData = (limit) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/pokemons`
                );

                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData.data);
                } else {
                    throw new Error('Network response was not ok.');
                }

                setLoading(false);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            } 
        };

        fetchData();
    }, [limit]);

    return { data, loading, error };
};

export default useFetchData;