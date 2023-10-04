<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: images = movie.images;
	$: backdrop = images.backdrops.find((image) => !image.iso_639_1) ?? images.backdrops[0];
	$: logo = images.logos.find((image) => image.iso_639_1 === 'en') ?? images.logos[0];
</script>

<a href="/movie/{movie.id}">
	<img
		style="aspect-ration: {backdrop.aspect_ratio}"
		class="backdrop"
		width="1280"
		alt={movie.title}
		src={media(backdrop.file_path, 1280)}
	/>

	<img
		style="aspect-ration: {logo.aspect_ratio}"
		class="logo"
		width="1280"
		alt={movie.title}
		src={media(logo.file_path, 1280)}
	/>
</a>

<style>
	a {
		position: relative;
	}

	.backdrop,
	.logo {
		object-fit: cover;
	}

	.logo {
		position: absolute;
		bottom: 5%;
		right: 5%;
		width: 40%;
		filter: drop-shadow(0 0 1rem gray);
	}
</style>
