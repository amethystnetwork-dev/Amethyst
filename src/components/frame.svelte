<script>
    import { createEventDispatcher } from "svelte";
    export let src = "";

    const emit = createEventDispatcher();
</script>

<div id="access">
    <nav id="access-nav">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <i class="fa-solid fa-arrow-left" on:click={(event) => {
            src = "about:blank";
            emit('exit', event);
        }} />
        <span id="access-title" />
    </nav>
    <iframe id="access-frame" title="Access Frame" src={src} />
</div>

<style>
    #access-frame {
        width: 100%;
        height: 90%;
        min-height: 95vh;
        display: block;
    }

    #access {
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    #access #access-nav {
        background-color: black;
        min-height: 5vh;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    #access-nav span {
        color: white;
    }
</style>