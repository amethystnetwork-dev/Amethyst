<script>
    import { tabIcon, tabTitle } from "../lib/TabCloak";
    import ABC from "../lib/ABC";
    import Head from "../components/head.svelte";
    import Ad from "../components/ad.svelte";

    let searchEngine = localStorage.getItem("amethyst||search") || "DuckDuckGo";
    let pxSetting = localStorage.getItem("amethyst||px") || "Ultraviolet";
    let themeSetting = localStorage.getItem("amethyst||theme") || "default";
    
    // I would put these in the event listener, but it complains that `value does not exist on EventTarget` and value DOES exist on EventTarget.
    const changeSearch = (event) => localStorage.setItem("amethyst||search", event.target.value);
    const changePx = (event) => localStorage.setItem("amethyst||px", event.target.value);

    function setNavLayout(type) {
        document.body.setAttribute("data-navbar", type);
        localStorage.setItem("amethyst||navLayout", type);
    }

    function changeTheme(event) {
        document.body.setAttribute("data-theme", event.target.value);
        localStorage.setItem("amethyst||theme", event.target.value);
    }

    function goBlank() {
        new ABC({
            type: "blank",
            url: window.location.href,
        }).open();
        window.location.replace("https://google.com");
    }
</script>
<Head localTitle="Amethyst | Settings" />

<div class="alignment-container-1 settings">
    <h1 class="settings-head">Settings</h1>
    <h2 class="settings-head2">Proxy</h2>
    <select class="dropdown" on:change={changePx} bind:value={pxSetting}>
        <option>Ultraviolet</option>
        <option>Corrosion</option>
    </select>
    <br />
    <br />
    <h2 class="settings-head2">Navbar</h2>
    <button class="button" on:click={() => setNavLayout("topbar")}
        >Top Bar</button
    >
    <button class="button" on:click={() => setNavLayout("sidebar")}
        >Side Bar</button
    >
    <br />
    <br />
    <h2 class="settings-head2">Tab Cloak</h2>
    <input
        placeholder="Enter a title"
        bind:value={$tabTitle}
    >
    <input type="url"
        placeholder="Enter a icon URL"
        bind:value={$tabIcon}
    >
    <h2 class="settings-head2">about:blank cloaking</h2>
    <button class="button" on:click={goBlank}>Go about:blank</button>
    <br />
    <br />
    <h2 class="settings-head2">Search engine</h2>
    <select class="dropdown" on:change={changeSearch} bind:value={searchEngine}>
        <option value="ddg">DuckDuckGo</option>
        <option value="brave">Brave</option>
        <option value="google">Google</option>
    </select>
    <br />
    <br />
    <h2 class="settings-head2">Theme</h2>
    <select class="dropdown" on:change={changeTheme} bind:value={themeSetting}>
        <option value="default">Amethyst</option>
        <option value="null">No Theme</option>
    </select>
</div>
<!-- <Ad client="" slot=""></Ad> -->

<style>
    .button {
        background-color:var(--button);
        border-radius:5px;
        border: none !important;
        width:100px;
        margin-bottom:5px;
        height:40px;
    }
    .button:hover,
    .button:focus {
        border-radius: 5px;
        background-color: var(--button-hover);
    }
  
    .settings-head {
        font-family: "Poppins";
        font-size: 36px;
        color: var(--header);
        padding:0px 0px 0px 0px;
        margin: 0px 0px 0px 0px;
    }
    .settings-head2 {
        font-family: "Poppins";
        font-size: 24px;
        color: var(--header);
    }
    .dropdown {
        font-family: "Poppins";
        background-color: var(--button);
        width: 150px;
        height:30px;
        border-radius:5px;
        border:none;
    }
    option {
        font-family: "Poppins";
        border-radius:5px;
    }
    .settings {
        overflow: auto;
    }
</style>