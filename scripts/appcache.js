var appCache = window.applicationCache;
var eventElement = document.createElement("div");
eventElement.style.cssText = "height: 100%; width: 100%;";
document.body.appendChild(eventElement);

if (appCache) {
    appCache.addEventListener("checking",
        function(event) {
            if (eventElement !== null)
                eventElement.innerHTML += "Checking: Checking manifest for update.<br/>";
        },
        false);


    appCache.addEventListener("downloading",
        function(event) {
            if (eventElement !== null)
                eventElement.innerHTML += "Downloading: Started download of files from manifest.<br/>";
        },
        false);


    appCache.addEventListener("progress",
        function(event) {
            if (eventElement !== null)
                eventElement.innerHTML += "Progress: File " + event.loaded + " of " + event.total + " downloaded.<br/>";
        },
        false);

    appCache.addEventListener("cached",
        function(event) {
            if (eventElement !== null)
                eventElement.innerHTML += "Cached: Download finished.<br/>";
        },
        false);

    appCache.addEventListener("error",
        function(event) {
            if (eventElement !== null) {
                if (navigator.onLine === true) { //If the user is connected to the internet.
                    var str = "Error: <br/>";
                    for (var key in event)
                        str += key + ":" + event[key] + "<br/>";

                    eventElement.innerHTML += str+"<br/>";
                } else {
                    eventElement
                        .innerHTML += "Error: Offline<br/>";
                }
            }
        },
        false);

    appCache.addEventListener("obsolete",
        function(event) {
            if (eventElement !== null)
                eventElement
                    .innerHTML += "Obsolete: no resources are cached, and previous cache(s) are now deleted.<br/>";
        },
        false);

    appCache.addEventListener("noupdate",
        function(event) {
            if (eventElement !== null)
                eventElement.innerHTML += "NoUpdate: No update of manifest.<br/>";
        },
        false);

    appCache.addEventListener("updateready",
        function(event) {
            if (eventElement !== null)
                eventElement.innerHTML += "UpdateReady: New version of manifest has been found.<br/>";
            appCache.swapCache();
            //window.reload();
        },
        false);
} else {
    if (eventElement !== null)
        eventElement.innerHTML += "AppCache not supported!!!<br/>";
}