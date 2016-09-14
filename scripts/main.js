var someHtml = "<font color='red'> b </font>" +
"<font color='orange'> u </font>" +
"<font color='blue'> r </font>" +
"<font color='yellow'> r </font>" +
"<font color='green'> i </font>" +
"<font color='bink'> t </font>" +
"<font color='white'> o </font>";

var someImage = "<br><img src='./burrito.png'>";
var somePhoto = "<br><img src='./IMG_5683.jpg'>";

window.onload = function(e){
	
	if (window.applicationCache) {
		var appCache = window.applicationCache;
		appCache.addEventListener('checking', onChecking, false);
		appCache.addEventListener('cached', onCached, false);
	}
	
	document.getElementById("b1").onclick = function() {
		document.getElementById("d1").innerHTML += someHtml;
		setTimeout(function(){
			document.getElementById("d1").innerHTML += someImage; 
		}, 1000);
	}
}

function onCached() {
	console.log("cached");
}

function onChecking() {
	console.log("checking");
}