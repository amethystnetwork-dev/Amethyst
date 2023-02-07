<script>
    export let title;
    export let image;
    export let location;
    export let click;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="box" on:click={(event) => click(location, event)}>
    <img class="gs-img" src={image} alt={title}>
    <h7 class="h7 gs-box-header">{title}</h7>
</div>