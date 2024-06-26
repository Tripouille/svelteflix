import { get } from '$lib/api.js';
import { views } from '$lib/views.js';

import type { MovieList } from '$lib/types.js';
export async function load({ params, url, fetch }) {
	const view = views[params.view];
	const page = url.searchParams.get('page') ?? '1';

	const data: MovieList = await get(fetch, view.endpoint, {
		page
	});

	return {
		view,
		title: view.title,
		endpoint: view.endpoint,
		movies: data.results,
		nextPage: data.page < data.total_pages ? data.page + 1 : null,
		infinite: true
	};
}
