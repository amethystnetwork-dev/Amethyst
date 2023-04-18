import { writable } from "svelte/store";

export const defaultTitle = "Amethyst";
export const defaultIcon = "/favicon.ico";

export const tabTitle = writable(localStorage.getItem("amethyst||title"));
export const tabIcon = writable(localStorage.getItem("amethyst||icon"));

tabIcon.subscribe(icon => {
    if(!icon || defaultIcon === icon) return localStorage.removeItem("amethyst||icon");
    localStorage.setItem("amethyst||icon", icon)
});
tabTitle.subscribe(title => {
    if(!title || defaultTitle === title) return localStorage.removeItem("amethyst||title");
    localStorage.setItem("amethyst||title", title)
});