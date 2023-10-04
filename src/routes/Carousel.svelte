<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';

	export let movies: MovieListResult[];
</script>

<div class="carousel">
	{#each movies as movie}
		<a href="movie/{movie.id}">
			<img alt={movie.title} src={media(movie.poster_path, 500)} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		margin-top: 1rem;
		display: flex;
		height: 12rem;
		gap: 1rem;
		overflow-x: scroll;
		scroll-snap-type: x mandatory; 
		scroll-padding-left: 2rem;
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	img {
		display: block;
		height: 100%;
		scroll-snap-align: start;
	}
</style>
