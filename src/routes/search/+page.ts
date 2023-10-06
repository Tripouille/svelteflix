import { get } from '$lib/api.js';

export async function load({ url }) {
	const query = url.searchParams.get('query');

	if (!query) {
		return {
			movies: [],
			query: ''
		};
	}

	const movies = await get(fetch, 'search/movie', { query });

	return {
		movies: movies.results,
		query: query
	};
}
