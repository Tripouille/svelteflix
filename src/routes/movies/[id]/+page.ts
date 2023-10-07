import { get } from '$lib/api.js';

import type { MovieDetails } from '$lib/types.js';

export async function load({ params, fetch }) {
	const movie: MovieDetails = await get(fetch, `/movie/${params.id}`, {
		append_to_response: 'images,videos,recommendations'
	});
	console.log(movie.videos.results)
	const trailer = movie.videos.results.find((video) => {
		return video.site === 'YouTube' && video.type === 'Trailer' && video.official;
	});

	return {
        trailer,
		movie
	};
}
