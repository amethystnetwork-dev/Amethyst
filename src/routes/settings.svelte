<script>
    import ABC from "../lib/ABC";
    import Head from "../components/head.svelte";
    import Ad from "../components/ad.svelte";

    let searchEngine = localStorage.getItem("amethyst||search") || "DuckDuckGo";
    let pxSetting = localStorage.getItem("amethyst||px") || "Ultraviolet";
    
    // I would put these in the event listener, but it complains that `value does not exist on EventTarget` and value DOES exist on EventTarget.
    const changeSearch = (event) => localStorage.setItem("amethyst||search", event.target.value);
    const changePx = (event) => localStorage.setItem("amethyst||px", event.target.value);

    function setNavLayout(type) {
        document.body.setAttribute('data-navbar', type);
        localStorage.setItem("amethyst||navLayout", type);
    }

    function goBlank() {
        var page = new ABC({
            type: "blank",
            url: window.location.href,
        });
        page.open();
        window.location.replace("https://google.com");
    }
</script>
<Head defaultTitle="Amethyst | Settings"></Head>

<div class="alignment-container-1">
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
</div>
<!-- <Ad client="" slot=""></Ad> -->