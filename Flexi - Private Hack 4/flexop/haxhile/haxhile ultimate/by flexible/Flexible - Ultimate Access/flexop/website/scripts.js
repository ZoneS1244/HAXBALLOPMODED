var urlRedirect = ["http://haxball.com", "http://www.haxball.com", "http://haxball.com/", "http://www.haxball.com/", "https://haxball.com", "https://www.haxball.com", "https://haxball.com/", "https://www.haxball.com/", "http://html5.haxball.com", "http://www.html5.haxball.com", "http://html5.haxball.com/", "http://www.html5.haxball.com/", "https://html5.haxball.com", "https://www.html5.haxball.com", "https://html5.haxball.com/", "https://www.html5.haxball.com/"];

if(urlRedirect.includes(window.location.href)) {
	window.location.href = "https://www.haxball.com/play";
}