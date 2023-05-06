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

  function lazyLoadImages() {
    const images = document.querySelectorAll(".gs-img");
    const options = {
      rootMargin: "10px 0px",
    };

    function preloadImage(img) {
      const src = img.getAttribute("data-src");
      if (!src) return;
      img.src = src;
      img.removeAttribute("data-src");
      img.setAttribute("data-loaded", true);
    }

    function handleImg(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          preloadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleImg, options);

    images.forEach((image) => {
      observer.observe(image);
    });
  }

  window.onload = function() {
    lazyLoadImages();
  }
</script>

<Head localTitle="Amethyst | Games"></Head>

{#if !showingFrame}
  <div class="alignment-container-1">
    <div class="header-container">
      <h1 class="head">Games</h1>
    </div>
    <div id="gs-container" style="max-height: 400px; overflow: auto; margin-left: 5%;">
      {#await getGames()}
        <h3>Loading</h3>
      {:then json}
        {#each json as i}
          
          <GameItem
            title={i.title}
            image={i.img}
            location={i.location}
            click={loadGameFrame}
            src={i.img}
            data-src={i.img}
            data-loaded={false}
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
    text-align: left;
    font-size: 30px;
    width: 100%;
    margin: auto;
    top: 40%;
    transform: translateY(-50%);
    position: relative;
    margin-left: 10px;
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
  }
  .gs-box-button:hover {
    color: black;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--theme-i);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--dark-text);
  }
</style>
