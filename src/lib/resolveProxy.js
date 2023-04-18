function isUrl(val = "") {
    return (/^http(s?):\/\//.test(val) || (val.includes(".") && val.substr(0, 1) !== " ")) ? true : false;
}

export default function(url, type) {
    switch (type) {
      case "Corrosion":
        if (!isUrl(url)) return `https://www.google.com/search?q=${url}`;
        return `/corrosion/gateway?url=${url}`;
      default:
      case "Ultraviolet":
        return `./load.html#${btoa(url)}`;
    }
}