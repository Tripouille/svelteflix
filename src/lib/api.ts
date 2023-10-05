export const API_BASE_URL = 'https://api.movies.tastejs.com/';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

const cache = new Map<string, unknown>();

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const searchParams = new URLSearchParams(params);
	const url = `${API_BASE_URL}${endpoint}?${searchParams}`;
	if (cache.has(url)) return cache.get(url);

	const result = await fetch(url).then((response) => response.json());
	cache.set(url, result);
	return result;
}

export function media(filePath: string, width: number) {
	return `${IMAGE_BASE_URL}w${width}${filePath}`;
}
