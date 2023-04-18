<script>
    import { createEventDispatcher } from "svelte";

    import Frame from "../components/frame.svelte";
    import GameItem from "../components/gameItem.svelte";
    import Head from "../components/head.svelte";
    import resolveProxy from "../lib/resolveProxy";

    const emit = createEventDispatcher();

    var showingFrame = false;
    var frameSrc = "about:blank";

    function loadAppFrame(loc) {
        emit("navhide");
        showingFrame = true;
        frameSrc = resolveProxy(loc);
    }

    async function getApps() {
        const res = await fetch("/json/apps.json");
        const json = await res.json();
        return json;
    }
</script>
<Head localTitle="Amethyst | Apps" />

{#if !showingFrame}
    <div class="alignment-container-1">
        <div class="header-container">
            <h1 class="head">Apps</h1>
        </div>
        <div id="apps-container">
            {#await getApps()}
                <h3>Loading</h3>
            {:then json}
                {#each json as i}
                    <GameItem
                        title={i.title}
                        image={i.img}
                        location={i.location}
                        click={loadAppFrame}
                    />
                {/each}
            {:catch err}
                <h3>Failed to load.</h3>
                <p>{err}</p>
            {/await}
        </div>
    </div>
{:else}
    <Frame src={frameSrc} on:exit={() => (showingFrame = false)} />
{/if}