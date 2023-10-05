<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';
	import { createEventDispatcher, onMount } from 'svelte';

	export let movies: MovieListResult[];
	export let nextPageLink: string | null;

	const dispatch = createEventDispatcher();

	let viewport: HTMLDivElement;
	let results: HTMLDivElement;
	let itemWidth: number = 0;
	let itemHeight: number = 0;
	let numberOfColumns: number = 4;

	let firstVisibleElement: number = 0;
	let lastVisibleElement: number = movies.length;
	let paddingTop = 0;
	let paddingBottom = 0;

	function handleResize() {
		const firstMovie: HTMLAnchorElement = results.firstChild as HTMLAnchorElement;
		if (!firstMovie) return;

		itemWidth = firstMovie.offsetWidth;
		itemHeight = firstMovie.offsetHeight;

		handleScroll();
	}

	function handleScroll() {
		const remaining = viewport.scrollHeight - (viewport.scrollTop + viewport.offsetHeight);
		if (remaining < 500) dispatch('load-more');
		firstVisibleElement = Math.floor(viewport.scrollTop / itemHeight) * numberOfColumns;
		lastVisibleElement =
			firstVisibleElement + Math.ceil(viewport.offsetHeight / itemHeight) * numberOfColumns;
		paddingTop = Math.floor((firstVisibleElement / numberOfColumns) * itemHeight);
		paddingBottom = Math.floor(
			((movies.length - lastVisibleElement) / numberOfColumns) * itemHeight
		);
	}

	onMount(handleResize);
</script>

<svelte:window on:resize={handleResize} />

<div class="viewport" bind:this={viewport} on:scroll={handleScroll}>
	<div
		class="results"
		bind:this={results}
		style:padding-top="{paddingTop}px"
		style:padding-bottom="{paddingBottom}px"
	>
		{#each movies.slice(firstVisibleElement, lastVisibleElement) as movie}
			<a href="/movies/{movie.id}">
				<img src={media(movie.poster_path, 500)} alt={movie.title} />
			</a>
		{/each}
	</div>
	{#if nextPageLink}
		<a href={nextPageLink}>Next page</a>
	{/if}
</div>

<style>
	.viewport {
		overflow-y: auto;
	}

	.viewport::-webkit-scrollbar {
		display: none;
	}

	.results {
		display: grid;
		gap: 1rem;
		height: 100%;
		grid-template-columns: repeat(4, 1fr);
		place-items: center;
		width: 100%;
	}

	a {
		width: 100%;
		aspect-ratio: 2/3;
	}

	img {
		width: 100%;
	}
</style>
