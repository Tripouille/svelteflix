<script lang="ts">
	import { page } from '$app/stores';
	import '../styles.css';
</script>

<nav>
	<a href="/" aria-label="svelteFlix">
		<img height="20" src="/images/svelteflix.svg" alt="svelteFlix" />
	</a>
	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Log in</a>
	</div>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>
		Data provided by <img
			src="/images/tmdb.svg"
			alt="The Movie Database (TMDB)"
			width="154"
			height="20"
		/>
	</p>
</footer>

<style>
	nav {
		flex-shrink: 0;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		height: 3rem;
		color: var(--clr-accent);
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	main.infinite {
		flex: 1;
		height: 0;
		overflow: hidden;
	}

	footer {
		width: 100%;
	}

	footer p {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
	}
</style>
