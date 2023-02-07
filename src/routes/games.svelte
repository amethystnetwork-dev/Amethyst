<script>
  import Frame from "../components/frame.svelte";
  import GameItem from "../components/gameItem.svelte";
  import Head from "../components/head.svelte";
  import Ad from "../components/ad.svelte";
  
  let showingFrame = false;
  let frameSrc = "about:blank";

  function loadGameFrame(loc) {
    showingFrame = true;
    frameSrc = loc;
  }

  async function getGames() {
    const res = await fetch("/json/gs.json");
    const json = await res.json();
    return json;
  }
</script>

<Head defaultTitle="Amethyst | Games"></Head>

{#if !showingFrame}
  <div class="alignment-container-1">
    <div class="header-container">
      <h1 class="head">Games</h1>
    </div>
    <div id="gs-container">
      {#await getGames() then json}
        {#each json as i}
          <GameItem
            title={i.title}
            image={i.img}
            location={i.location}
            click={loadGameFrame}
          />
        {/each}
      {/await}
    </div>
  </div>
  <!-- <Ad client="" slot=""></Ad> -->
{:else}
  <Frame src={frameSrc} on:exit={() => showingFrame = false}></Frame>
{/if}