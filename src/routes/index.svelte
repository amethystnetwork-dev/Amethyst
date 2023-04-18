<script>
  import { createEventDispatcher } from "svelte";

  import Frame from "../components/frame.svelte";
  import Head from "../components/head.svelte";
  import resolveProxy from "../lib/resolveProxy";
  import Ad from "../components/ad.svelte";
  import AlienHub from "../components/AlienHub.svelte";
  import bare from "../lib/BareClient";

  const emit = createEventDispatcher();

  let input = "";
  let showingFrame = false;
  let frameSrc = "about:blank";
  var sugg = [];

  function go(i) {
    sugg = [];
    emit("navhide");
    showingFrame = true;
    frameSrc = resolveProxy(i || input, localStorage.getItem("amethyst||px"));
  }

  async function keydown(event) {
    const query = event.target.value;
    if(!query) return sugg = [];
    const res = await bare.fetch("https://duckduckgo.com/ac/?q=" + query + "&type=list");
    const json = await res.json();
    sugg = json[1];
  }

  function goSugg(event) {
    go(event.target.textContent);
  }
</script>

<Head></Head>

{#if !showingFrame}
  {#if !import.meta.env.DISABLE_ALIENHUB}
      <AlienHub on:click={e => go(e.detail)} />
    {/if}
  <div class="alignment-container-1">
    <div class="header-container">
      <img src="/img/logo.png" class="nav-logo" alt="Amethyst Logo" />
      <h1 class="head">Amethyst</h1>
    </div>
    <form id="searchform" on:submit|preventDefault={() => go()}>
      <button type="submit" class="submit-button"
      ><i class="fas fa-search searchicon" /></button
    >
      <!-- svelte-ignore a11y-autofocus -->
      <input
        on:input={keydown}
        autofocus
        autocomplete="off"
        class="search"
        id="search"
        placeholder="Search or Type URL"
        bind:value={input}
      />
    </form>
    <div class="suggestions">
      {#each sugg as item, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="sugg"
        on:click={goSugg}
      >{item}</div>
      {/each}
    </div>
  </div>

  <!-- <Ad client="" slot=""></Ad> -->
{:else}
  <Frame src={frameSrc} on:exit={() => (showingFrame = false)} />
{/if}

<style>
.suggestions {
  width: 584px;
  height: auto;
  background: var(--highlight);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  font-size: large;
  margin: 0 10px;
  z-index: 1;
  max-width: calc(100vh - 10px);
}

.sugg {
  padding: 5px;
  padding-left: 10px;
  cursor: pointer;
  color: var(--text-contrast);
  overflow: hidden;
}
</style>