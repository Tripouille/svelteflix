import { get } from '$lib/api';

import type { MovieDetails, MovieList } from '$lib/types';

export async function load({ fetch }) {
	const trending: MovieList = await get(fetch, 'trending/movie/day');
	const featured: MovieDetails = await get(fetch, `movie/${trending.results[0].id}`, {
		append_to_response: 'images'
	});

	return { trending, featured };
}
