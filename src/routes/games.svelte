<script>
  import { createEventDispatcher } from "svelte";

  import Frame from "../components/frame.svelte";
  import GameItem from "../components/gameItem.svelte";
  import Head from "../components/head.svelte";
  import resolveProxy from "../lib/resolveProxy";
  import Ad from "../components/ad.svelte";
  
  const emit = createEventDispatcher();

  let showingFrame = false;
  let frameSrc = "about:blank";

  function loadGameFrame(loc) {
    emit("navhide");
    showingFrame = true;
    if(loc.startsWith("/") && !loc.startsWith("//")) return frameSrc = loc;
    frameSrc = resolveProxy(loc);
  }

  async function getGames() {
    const res = await fetch("/cdn/gs.json");
    const json = await res.json();
    return json;
  }
</script>

<Head localTitle="Amethyst | Games"></Head>

{#if !showingFrame}
  <div class="alignment-container-1">
    <div class="header-container">
      <h1 class="head">Games</h1>
    </div>
    <div id="gs-container">
      {#await getGames()}
        <h3>Loading</h3>
      {:then json}
        {#each json as i}
          <GameItem
            title={i.title}
            image={i.img}
            location={i.location}
            click={loadGameFrame}
          />
        {/each}
        {:catch err} 
          <h3>Failed to load</h3>
          <p>{err}</p>
      {/await}
    </div>
  </div>
  <!-- <Ad client="" slot=""></Ad> -->
{:else}
  <Frame src={frameSrc} on:exit={() => showingFrame = false}></Frame>
{/if}