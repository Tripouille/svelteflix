import { get } from '$lib/api';

import type { MovieDetails } from '$lib/types';
import { views, type ViewWithResults } from '$lib/views.js';

export async function load({ fetch }) {
	const results = await Promise.all(Object.values(views).map(view => {
		return get(fetch, view.endpoint).then(response => response.results);
	}));

	const viewsWithResults: ViewWithResults[] = Object.values(views).map((view, i) => {
		return {
			...view,
			results: results[i],
		}
	});

	const featured: MovieDetails = await get(fetch, `movie/${results[0][0].id}`, {
		append_to_response: 'images'
	});

	return { viewsWithResults, featured };
}
