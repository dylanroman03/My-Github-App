var exploreFormElt = document.getElementById("exploreForm");
var exploreInputElt = document.getElementById("exploreInput");

exploreFormElt.addEventListener("submit", function(e){
	e.preventDefault();
	var nameUser = exploreInputElt.value;
	var url = "https://api.github.com/users/" + nameUser
	ajaxGet(url, function(reply){
		var user = JSON.parse(reply);
		//mostrarInformacion(user)
		console.log(user);
	});
});
