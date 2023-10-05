<script lang="ts">
	import Carousel from './Carousel.svelte';
	import Hero from './Hero.svelte';

	export let data;
</script>

<h1>Top trending movies</h1>
<Hero movie={data.featured} />

{#each data.viewsWithResults as view}
	<Carousel view={view} />	
{/each}
