<script lang="ts">
	import type { ViewWithResults } from '$lib/views';
	import Carousel from '../../Carousel.svelte';
	import Hero from './Hero.svelte';

	export let data;
	const view: ViewWithResults = {
		title: 'Recommendations',
		results: data.movie.recommendations.results,
		href: `${data.movie.id}/recommendations`,
		endpoint: `movie/${data.movie.id}/recommendations`
	};
</script>

<Hero movie={data.movie} />

<div class="trailer">
	{#if data.trailer}
		<iframe
			title="trailer"
			src="https://www.youtube.com/embed/{data.trailer.key}"
			frameborder="0"
			allow="accelerometer; autoplay;"
			allowfullscreen
		/>
	{/if}

	<dl class="trailer-info">
		<div>
			<dt>Release Date</dt>
			<dd>{data.movie.release_date}</dd>
		</div>
		<div>
			<dt>Runtime</dt>
			<dd>{data.movie.runtime} minutes</dd>
		</div>
		<div>
			<dt>Genres</dt>
			<dd>{data.movie.genres.map((genre) => genre.name).join(', ')}</dd>
		</div>
		<div>
			<dt>Production Countries</dt>
			<dd>{data.movie.production_countries.map((country) => country.name).join(', ')}</dd>
		</div>
		<div>
			<dt>Spoken Languages</dt>
			<dd>{data.movie.spoken_languages.map((language) => language.name).join(', ')}</dd>
		</div>
		<div>
			<dt>Revenue</dt>
			<dd>${data.movie.revenue.toLocaleString()}</dd>
		</div>
		<div>
			<dt>Budget</dt>
			<dd>${data.movie.budget.toLocaleString()}</dd>
		</div>
	</dl>
</div>

<div>
	<h2>You may also like:</h2>
	<Carousel {view} />
</div>

<style>
	.trailer {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 2rem;
	}

	dl > div {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	dl dt {
		margin: 0;
		color: gray;
	}

	dl dd {
		margin: 0;
	}

	iframe {
		aspect-ratio: 16/9;
		width: 100%;
	}

	.trailer-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	@media (min-width: 40em) {
		.trailer {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
