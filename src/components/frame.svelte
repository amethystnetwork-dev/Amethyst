<script>
    import { createEventDispatcher } from "svelte";
    export let src = "";

    const emit = createEventDispatcher();
</script>

<div id="access">
    <nav id="access-nav">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <i class="fa-solid fa-arrow-left exit" on:click={(event) => {
            src = "about:blank";
            emit("exit", event);
        }} />
        <span id="access-title" />
    </nav>
    <iframe id="access-frame" title="Access Frame" frameborder="0" src={src} />
</div>

<style>
    
    #access-frame {
        width: 100%;
        height: 90%;
        min-height: 95vh;
        display: block;
        position: absolute;
        bottom: 0px;
    }

    #access {
        flex-direction: column;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
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
    .exit {
        color: white;
    }

    /* Frame */
.frame-container {
position: fixed;
top: 60px; 
left: 0; 
right: 0; 
bottom: 0;
border: none;
display: none;
width: 100%;
height: 100%
}
</style>