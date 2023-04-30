<script>
  import Head from "../components/head.svelte";
</script>
<Head localTitle="Amethyst | Support" />

<div class="support-container">
    <h1 class="support-title">Support Us</h1>
    <p class="support-desc">Help us!</p>
  <div class="support-buttons">
    <a href="https://www.buymeacoffee.com/amethystnetwork" target="_blank" rel="noreferrer" class="support-btn bmcb-btn" style="--bmcb-btn-text-color: white;">Buy Me A Coffee</a>
    <a href="https://patreon.com/amethystnetwork" target="_blank" rel="noreferrer" class="support-btn patreon-btn" style="--patreon-btn-text-color: white;">Become A Patron</a>
    <a href="https://discord.gg/amethyst" target="_blank" rel="nonreferrer" class="join-discord-btn" style="--discord-btn-text-color: white;">Join Our Discord</a>
  </div>
</div>
<style>
  .support-buttons {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 40px;
}

.support-btn {
  border: none;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: black;
  padding: 15px 30px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 100%;
  margin-bottom: 20px;
}

.bmcb-btn {
  background-color: #FFDD00;
  --bmcb-btn-bg-color: #FFDD00;
  --bmcb-btn-border-radius: 10px;
}

.bmcb-btn:hover {
  background-color: #FFD600;
}

.patreon-btn {
  background-color: #FF424D;
  --patreon-btn-bg-color: #FF424D;
  --patreon-btn-border-radius: 10px;
}

.patreon-btn:hover {
  background-color: #FF3A44;
}

.join-discord-btn {
  background-color: #7289DA;
  --discord-btn-bg-color: #7289DA;
  --discord-btn-border-radius: 10px;
  margin-top: 40px;
  width: 100%;
}

.join-discord-btn:hover {
  background-color: #677bc4;
}
</style>
