export const API_BASE_URL = 'https://api.movies.tastejs.com/';

export async function get(fetch: typeof globalThis.fetch, endpoint: string, params?: Record<string, string>) {
    const searchParams = new URLSearchParams(params);
    return fetch(`${API_BASE_URL}${endpoint}?${searchParams}`).then((response) => response.json());
}