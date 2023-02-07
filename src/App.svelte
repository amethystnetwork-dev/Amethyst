<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./components/navbar.svelte";
  // Routes
  import Homepage from './routes/index.svelte';
  import Apps from "./routes/apps.svelte";
  import Games from './routes/games.svelte';
  import Credits from "./routes/credits.svelte";
  import Settings from "./routes/settings.svelte";

  import NotFound from './routes/NotFound.svelte';

  function onLoad() {
    document.body.setAttribute('data-navbar', (localStorage.getItem('amethyst||navLayout') || 'sidebar'))

    if('serviceWorker' in navigator) {
      // @ts-ignore
      navigator.serviceWorker.register('/uv/sw.js', { scope: __uv$config.prefix })
    }
  }
</script>

<svelte:window on:load={onLoad}></svelte:window>

<Router>
  <Navbar></Navbar>
  <Route path="/"><Homepage /></Route>
  <Route path="/apps/"><Apps /></Route>
  <Route path="/gs/"><Games /></Route>
  <Route path="/credits/"><Credits /></Route>
  <Route path="/settings/"><Settings /></Route>
  <Route path="*"><NotFound /></Route>
</Router>