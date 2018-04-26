const EXTERNAL_URL = "https://daily.afisha.ru/out/?url=";

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].href.startsWith(EXTERNAL_URL)) {
        links[i].href = decode(links[i].href);
    }    
}

function decode(url) {
    url = url.replace(EXTERNAL_URL, "");
    var index = url.lastIndexOf("&");
    if (index != -1) {
        url = url.substring(0, index);
    }
    url = atob(decodeURIComponent(url).replace("_", "/"));
    return url;
}
