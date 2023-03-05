<script>
    import { Link } from "svelte-routing";
    export let checked = false;

    function getProps({ isCurrent }) {
        return (isCurrent ? { class: "active" } : {});
    }
</script>

<nav>
    <input type="checkbox" id="check" bind:checked={checked} />
    <label for="check">
        <i class="fa-solid fa-bars fa-2xl" id="btn" />
        <i class="fa-solid fa-bars fa-2xl" id="cancel" />
    </label>
    <div class="sidebar">
        <h2 class="nav-header">Amethyst</h2>
        <Link to="/" getProps="{getProps}"><span>Home</span></Link>
        <Link to="/apps" getProps="{getProps}"><span>Apps</span></Link>
        <Link to="/gs" getProps="{getProps}"><span>Games</span></Link>
        <Link to="/credits" getProps="{getProps}"><span>Credits</span></Link>
        <Link to="/settings" getProps="{getProps}"><span>Settings</span></Link>
    </div>
</nav>

<style></style>