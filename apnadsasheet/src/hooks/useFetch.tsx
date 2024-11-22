import { useState, useEffect, useCallback, useRef } from "react";

interface UseFetchOptions extends RequestInit {
    // Additional options can be added here if needed
}

interface UseFetchResponse<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
    isOffline: boolean;
    refetch: () => void;
}

/**
 * useFetch - A custom hook for fetching data from APIs with TypeScript support.
 * @param url - The API endpoint to fetch data from
 * @param options - Fetch options (method, headers, etc.)
 * @returns { data, error, loading, isOffline, refetch }
 */
const useFetch = <T = unknown>(
    url: string,
    options: UseFetchOptions = {}
): UseFetchResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);

    const abortController = useRef<AbortController | null>(null);

    // Handle online/offline status
    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    const fetchData = useCallback(async () => {
        abortController.current = new AbortController();
        const signal = abortController.current.signal;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, { ...options, signal });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const result: T = await response.json();
            setData(result);
        } catch (err: unknown) {
            if (err instanceof DOMException && err.name === "AbortError") {
                // Ignore aborted fetch
                console.log("Fetch aborted");
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    }, [url, options]);

    // Clean up fetch on unmount or re-fetch
    useEffect(() => {
        fetchData();

        return () => {
            if (abortController.current) {
                abortController.current.abort();
            }
        };
    }, [fetchData]);

    const refetch = useCallback(() => {
        if (abortController.current) {
            abortController.current.abort();
        }
        fetchData();
    }, [fetchData]);

    return { data, error, loading, isOffline, refetch };
};

export default useFetch;
