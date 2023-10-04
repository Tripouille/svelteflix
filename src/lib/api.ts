export const API_BASE_URL = 'https://api.movies.tastejs.com/';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export async function get(fetch: typeof globalThis.fetch, endpoint: string, params?: Record<string, string>) {
    const searchParams = new URLSearchParams(params);
    return fetch(`${API_BASE_URL}${endpoint}?${searchParams}`).then((response) => response.json());
}

export function media(filePath: string, width: number) {
    return `${IMAGE_BASE_URL}w${width}${filePath}`;
}