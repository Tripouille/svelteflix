<script lang="ts">
    import "../styles.css";
</script>

<nav>
    <a href="/">SvelteFlix</a>
    <div class="links">
        <a href="/search">Search</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/login">Log in</a>
    </div>
</nav>

<slot />

<style>
    nav {
        padding: 0 var(--side);
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        background-color: aliceblue;
        max-width: var(--column);
        color: var(--clr-accent);
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>