<script>
    export let title;
    export let image;
    export let location;
    export let click;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="box" on:click={(event) => click(location, event)}>
    <img class="gs-img" src={image} alt={title} />
    <h7 class="gs-box-header">{title}</h7>
</div>

<style>
    .box {
        width: 350px;
        height: 100px;
        background-color: var(--box);
        border-radius: 10px;
        display: flex;
        float: left;
        margin-left: 30px;
        box-shadow: var(--box) 2px;
        margin-bottom: 5px;
    }

    .gs-img {
        width: 70px;
        height: 70px;
        border-radius: 10px;
        margin-left: 20px;
        margin-top: 10px;
    }

    .gs-img:hover {
        transition: 1s;
        transform: scale(1.3);
        z-index: 2;
    }
    .gs-box-header {
        font-family: "Montserrat", sans-serif;
        color: white;
        text-align: center;
        margin-left: 140px;
        position: absolute;
        font-size: 30px;
    }

    .gs-box-header:hover {
        transition: 1s;
        transform: scale(1.1);
        z-index: 2;
    }
    .b2 {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        /* margin-bottom: 30px; */
    }

    .gs-box-button:hover {
        color: black;
    }
</style>
