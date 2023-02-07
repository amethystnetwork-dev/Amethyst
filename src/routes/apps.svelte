<script>
    import Frame from "../components/frame.svelte";
    import GameItem from "../components/gameItem.svelte";
    import Head from "../components/head.svelte";

    var showingFrame = false;
    var frameSrc = "about:blank";

    function loadAppFrame(loc) {
        showingFrame = true;
        frameSrc = loc;
    }

    async function getApps() {
        const res = await fetch("/json/apps.json");
        const json = await res.json();
        return json;
    }
</script>
<Head defaultTitle="Amethyst | Apps"></Head>

{#if !showingFrame}
    <div class="alignment-container-1">
        <div class="header-container">
            <h1 class="head">Apps</h1>
        </div>
        <div id="apps-container">
            {#await getApps() then json}
                {#each json as i}
                    <GameItem
                        title={i.title}
                        image={i.img}
                        location={i.location}
                        click={loadAppFrame}
                    />
                {/each}
            {/await}
        </div>
    </div>
{:else}
    <Frame src={frameSrc} on:exit={() => (showingFrame = false)} />
{/if}