<script>
    import { onMount } from "svelte";
    onMount(() => {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    });

    export let slot;
    export let client;
    export let format = "";
    export let style = "";
</script>

<ins
    class="adsbygoogle"
    style={style}
    data-ad-client={client}
    data-ad-slot={slot}
    data-ad-format={format}
/>