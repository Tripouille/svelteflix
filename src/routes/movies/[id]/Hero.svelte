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
        position: relative;
        display: grid;
        background: black;
    }

    .backdrop img {
        display: block;
        height: 100%;
        width: 100%;
    }


    .backdrop {
        position: relative;
    }

    .backdrop::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 8rem;
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

    
    .info * {
        margin: 0;
    }

    @media (min-width: 50rem) {
        .hero {
            grid-template-columns: 1fr 60rem;
            grid-template-rows: auto;
        }

        .backdrop {
            position: relative;
            grid-column: 2/3;
            height: 100%;
        }

        .backdrop::after {
            width: 15rem;
            height: 100%;
            left: 0;
            bottom: 0;
            background: linear-gradient(to right, black, transparent);
        }

        .info {
            position: absolute;
            top: 0;
            left: 0;
            width: 40rem;
            height: 100%;
            grid-column: 1/2;
            margin-top: 0;
            justify-content: center;
            filter: drop-shadow(0 0 1.5rem black);
        }
    }
</style>