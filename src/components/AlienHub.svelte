<script>
    import { onMount, createEventDispatcher } from "svelte";
    import bare from "../lib/BareClient"

    const emit = createEventDispatcher();
    let url, img;
    onMount(async () => {
        if(import.meta.env.DEV) return img = "https://alienhub.xyz/images/ad-c8de3fef-bff1-4963-a417-3995855d70e0.gif";
        const res = await bare.fetch("https://hub.alienhub.xyz/showapi?utm_source=amethyst&utm_medium=amethystnetwork");
        const json = await res.json();
        url = json.url;
        img = `/corrosion/gateway?url=${json.img}`;
    });
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<img src={img} alt="Hub" width="450" height="150" on:click={() => emit("click", url)}>