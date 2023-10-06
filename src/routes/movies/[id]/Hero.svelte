<script lang="ts">
	import { IMAGE_BASE_URL, media } from "$lib/api";
	import type { MovieDetails } from "$lib/types";

    export let movie: MovieDetails;
    $: backdrop = movie.images.backdrops.find(image => !image.iso_639_1) ?? movie.images.backdrops[0];
</script>

<div class="hero">
    <div class="backdrop">
        <img src={media(backdrop.file_path, 1280)} alt={movie.title}>
    </div>
    <div class="info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
    </div>
</div>