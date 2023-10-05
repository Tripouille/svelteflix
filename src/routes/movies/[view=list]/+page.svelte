<script lang="ts">
	import { get } from '$lib/api';
	import type { MovieList } from '$lib/types';
	import ResultsPage from '../../ResultsPage.svelte';

	export let data;
	let appending = false;

	async function handleLoadMore() {
		if (!data.nextPage) return;
		if (appending) return;
		appending = true;
		console.log('load more');

		const next: MovieList = await get(fetch, data.endpoint, {
			page: String(data.nextPage)
		});

		data.movies = [...data.movies, ...next.results];
		data.nextPage = next.page < next.total_pages ? next.page + 1 : null;
	}
</script>

<div>
	<h1>{data.title}</h1>
	<ResultsPage
		on:load-more={handleLoadMore}
		movies={data.movies}
		nextPageLink={data.nextPage ? `${data.view.href}?page=${data.nextPage}` : null}
	/>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
