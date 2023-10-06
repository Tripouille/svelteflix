<script lang="ts">
	import { media } from "$lib/api";
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

<style>
    .hero {
        display: grid;
        background: black;
    }

    .backdrop img {
            width: 100%;
    }


    .backdrop {
        position: relative;
    }

    .backdrop::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5rem;
        bottom: 0;
        left: 0;
        background: linear-gradient(to top, black, transparent);
    }

    .info {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            gap: 1rem;
            margin-top: -6rem;
            z-index: 1;
    }

    @media (min-width: 50rem) {
        .hero {
            grid-template-columns: 1fr 50rem;
            grid-template-rows: auto;
        }

        .info * {
            margin: 0;
        }

        .backdrop {
            position: relative;
            grid-column: 2/3;
        }
    }
</style>