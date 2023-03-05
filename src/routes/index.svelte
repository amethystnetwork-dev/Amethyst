<script>
  import { createEventDispatcher } from "svelte";

  import Frame from "../components/frame.svelte";
  import Head from "../components/head.svelte";
  import Ad from "../components/ad.svelte";
  import AlienHub from "../components/AlienHub.svelte";

  const emit = createEventDispatcher();

  let input = "";
  let showingFrame = false;
  let frameSrc = "about:blank";

  function loadFrame(url) {
    frameSrc = url;
    showingFrame = true;
  }

  function go(i) {
    const url = i || input;
    if(!url) return;
    emit("navhide");
    switch (localStorage.getItem("amethyst||px")) {
      case "Corrosion":
        if (!isUrl(input))
          return loadFrame(`https://www.google.com/search?q=${url}`);
        loadFrame(`/corrosion/gateway?url=${url}`);
        break;
      default:
      case "Ultraviolet":
        loadFrame(`./load.html#${btoa(url)}`);
    }
  }

  function isUrl(val = "") {
    return (/^http(s?):\/\//.test(val) || (val.includes(".") && val.substr(0, 1) !== " ")) ? true : false;
  }

  function goSugg(event) {
    go(event.target.textContent);
  }
  var sugg = [];
</script>

<Head></Head>

{#if !showingFrame}
  <AlienHub />
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
  display: none;
}

.sugg {
  padding: 5px;
  padding-left: 10px;
  cursor: pointer;
  color: var(--text-contrast);
  overflow: hidden;
}
</style>