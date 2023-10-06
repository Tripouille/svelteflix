<script lang="ts">
	import ResultsPage from "../ResultsPage.svelte";

    export let data;
</script>

<div>
    <h1>Search</h1>
    <form>
        <input name="query" type="search" value={data.query}>
    </form>
    {#if data.query}
        <ResultsPage movies={data.movies} nextPageLink='' />
    {/if}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    input {
        border: none;
        font-family: inherit;
        font-size: 2rem;
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: white;
        color: black;
    }

    input[type=search]::-webkit-search-cancel-button{
        -webkit-appearance: none;
        height: 1em;
        width: 1em;
        border-radius: 50%;
        background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
        background-size: contain;

        opacity: 0;
        pointer-events: none;
        cursor: pointer;
    }

    input[type="search"]:focus::-webkit-search-cancel-button {
        opacity: .3;
        pointer-events: all;
    }

    input:focus-visible {
        outline: 2px solid var(--clr-accent);
    }
</style>