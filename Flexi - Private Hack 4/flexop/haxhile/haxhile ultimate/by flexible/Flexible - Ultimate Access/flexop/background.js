chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(details.url.endsWith("game-min.js"))
		{
			return { redirectUrl: chrome.extension.getURL("website/game/game.js") };
		}
    },
    {urls: ["*://*.haxball.com/*.js"]},
    ["blocking"]
);