<script>
    import { Link } from "svelte-routing";
    export let checked = false;

    function getProps({ isCurrent }) {
        return isCurrent ? { class: "active" } : {};
    }
</script>

<nav>
    <input type="checkbox" id="check" bind:checked />
    <label for="check" class="menuicon">
        <i class="fa-solid fa-bars fa-2xl" id="btn" />
        <i class="fa-solid fa-bars fa-2xl" id="cancel" />
    </label>
    <div class="sidebar">
        <h2 class="nav-header">Amethyst</h2>
        <Link to="/" {getProps}><span>Home</span></Link>
        <Link to="/apps" {getProps}><span>Apps</span></Link>
        <Link to="/gs" {getProps}><span>Games</span></Link>
        <Link to="/credits" {getProps}><span>Credits</span></Link>
        <Link to="/settings" {getProps}><span>Settings</span></Link>
    </div>
</nav>

<style></style>