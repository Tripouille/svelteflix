import { get } from '$lib/api.js';
import type { MovieDetails } from '$lib/types.js';

export async function load({ params, fetch }) {
	const movie: MovieDetails = await get(fetch, `/movie/${params.id}`, {
		append_to_response: 'images,videos,recommendations'
	});
	const trailer = movie.videos.results.find((video) => {
		return video.official && video.site === 'Youtube' && ['Trailer', 'Teaser'].includes(video.type);
	});

	return {
        trailer,
		movie
	};
}
