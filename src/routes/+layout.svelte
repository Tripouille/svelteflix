<script lang="ts">
    import "../styles.css";
</script>

<nav>
    <a href="/" aria-label="svelteFlix"><img height="20" src="/images/svelteflix.svg" alt="svelteFlix"></a>
    <div class="links">
        <a href="/search">Search</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/login">Log in</a>
    </div>
</nav>

<main>
    <slot />
</main>

<footer>
    <p>Data provided by <img src="/images/tmdb.svg" alt="The Movie Database (TMDB)" width="154" height="20"></p>
</footer>

<style>
    nav {
        padding: 0 var(--side);
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        max-width: var(--column);
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

    main {
        flex: 1;
        display: grid;
        place-items: center;
    }

    footer {
        width: 100%;
        max-width: var(--column);
        padding: 0 var(--side);
    }

    footer p {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
    }
</style>