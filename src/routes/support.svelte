<script>
  import Head from "../components/head.svelte";
</script>
<Head localTitle="Amethyst | Support" />

<div class="support-container">
    <h1 class="support-head">Support Us</h1>
    <h1 class="support-desc">Help us! This will go towards alleviating server and domain costs.</h1>
  <div class="support-buttons">
    <a href="https://www.buymeacoffee.com/amethystnetwork" target="_blank" rel="noreferrer" class="bmcb-btn"><img src="/img/bmac.png" /></a>
    <a href="https://discord.gg/fzrmxgu2NR" target="_blank" rel="nonreferrer" class="join-discord-btn"><img src="/img/discord.png" /></a>
  </div>
</div>
<style>
  .support-container {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .support-buttons {
    display: flex;
    flex-direction: column;
    height: 50%;
    margin-top: 40px;
  }
  .support-head{
    color: var(--header);
  }
  .support-desc{
    color: var(--header);
    font-size: 20px;
  }
  .join-discord-btn {
    margin-top: 40px;
  }
  img {
    width: 75%;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    border: none;
  }
  img:hover {
    transform: scale(1.2);
  }
</style>
