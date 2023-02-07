<script>
  import Frame from "../components/frame.svelte";
  import Head from "../components/head.svelte";
  import Ad from "../components/ad.svelte";

  let input = "";
  let showingFrame = false;
  let frameSrc = "about:blank";

  function loadFrame(url) {
    frameSrc = url;
    showingFrame = true;
  }

  function go() {
    switch (localStorage.getItem("amethyst||px")) {
      case "Ultraviolet":
        loadFrame(`./load.html#${btoa(input)}`);
        break;
      case "Corrosion":
        if (!isUrl(input))
          return loadFrame(`https://www.google.com/search?q=${input}`);
        loadFrame(`/corrosion/gateway?url=${input}`);
        break;
      default:
        loadFrame(`./load.html#${btoa(input)}`);
        break;
    }
  }

  function isUrl(val = "") {
    if (
      /^http(s?):\/\//.test(val) ||
      (val.includes(".") && val.substr(0, 1) !== " ")
    )
      return true;
    return false;
  }
</script>

<Head></Head>

{#if !showingFrame}
  <div class="alignment-container-1">
    <div class="header-container">
      <img src="/img/logo.png" class="nav-logo" alt="Amethyst Logo" />
      <h1 class="head">Amethyst</h1>
    </div>
    <form id="searchform" on:submit|preventDefault={go}>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        autofocus
        autocomplete="off"
        class="search"
        id="search"
        placeholder="Search or Type URL"
        bind:value={input}
      />
      <button type="submit" class="submit-button"
        ><i class="fas fa-search searchicon" /></button
      >
    </form>
  </div>

  <!-- <Ad client="" slot=""></Ad> -->
{:else}
  <Frame src={frameSrc} on:exit={() => (showingFrame = false)} />
{/if}

<style>
</style>