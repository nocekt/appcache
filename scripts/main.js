var someHtml = "<font color='red'> b </font>" +
"<font color='orange'> u </font>" +
"<font color='blue'> r </font>" +
"<font color='yellow'> r </font>" +
"<font color='green'> i </font>" +
"<font color='bink'> t </font>" +
"<font color='white'> o </font>";

var someImage = "<br><img src='./burrito.png'>";

window.onload = function(e){
	
	if (window.applicationCache) {
		var appCache = window.applicationCache;
	}
	
	document.getElementById("b1").onclick = function() {
		document.getElementById("d1").innerHTML += someHtml;
		setTimeout(function(){
			document.getElementById("d1").innerHTML += someImage; 
		}, 1000);
	}
}