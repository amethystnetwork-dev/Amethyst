<script>
    import { tabIcon, tabTitle, defaultTitle, defaultIcon } from "../lib/TabCloak";

    let title, icon;
    export let localTitle = defaultTitle;
    
    tabTitle.subscribe(value => title = value ? value : localTitle);
    tabIcon.subscribe(value => icon = value ? value : defaultIcon);
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="icon" href={icon}>
</svelte:head>