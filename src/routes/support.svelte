<script>
  import Head from "../components/head.svelte";
</script>
<Head localTitle="Amethyst | Support" />

<div class="support-container">
    <h1 class="support-title">Support Us</h1>
    <p class="support-desc">Help us! This will go towards alleviating server and domain costs.</p>
  <div class="support-buttons">
    <a href="https://www.buymeacoffee.com/amethystnetwork" target="_blank" rel="noreferrer" class="bmcb-btn"><img style="border:none;" src="/img/bmac.png" /></a>
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

  .join-discord-btn {
    margin-top: 40px;
  }

  .join-discord-btn img {
    width: 65%;
    height: auto;
  }

  img {
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  }

  img:hover {
    transform: scale(1.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
</style>
