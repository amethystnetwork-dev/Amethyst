<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./components/navbar.svelte";
  // Routes
  import Homepage from "./routes/index.svelte";
  import Apps from "./routes/apps.svelte";
  import Games from "./routes/games.svelte";
  import Credits from "./routes/credits.svelte";
  import Settings from "./routes/settings.svelte";

  import NotFound from "./routes/NotFound.svelte";

  let checked;

  function h() {
    checked = false;
  }
</script>

<Router>
  <Navbar bind:checked={checked}></Navbar>
  <Route path="/"><Homepage on:navhide={h} /></Route>
  <Route path="/apps/"><Apps on:navhide={h} /></Route>
  <Route path="/gs/"><Games on:navhide={h} /></Route>
  <Route path="/credits/"><Credits /></Route>
  <Route path="/settings/"><Settings /></Route>
  <Route path="*"><NotFound /></Route>
</Router>