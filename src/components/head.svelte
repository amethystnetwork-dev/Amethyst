<script>
    import { tabIcon, tabCloak } from '../lib/TabCloak';

    export let defaultTitle = "Amethyst";
</script>

<svelte:head>
  {#if $tabCloak}
    <title>{$tabCloak}</title>
  {:else}
    <title>{defaultTitle}</title>
  {/if}

  {#if $tabIcon}
    <link rel="icon" href="{$tabIcon}">
  {/if}
</svelte:head>