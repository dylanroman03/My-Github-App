var exploreFormElt = document.getElementById("exploreForm");
var exploreInputElt = document.getElementById("exploreInput");

exploreFormElt.addEventListener("submit", function(e){
	e.preventDefault();
	var nameUser = exploreInputElt.value;
	var url = "https://api.github.com/users/" + nameUser
	ajaxGet(url, function(reply){
		var user = JSON.parse(reply);
		viewInformation(user);
		console.log(user);
	});
});

//Function View Information para mostrar informacion
function viewInformation(user){
	var divInformationElt = document.getElementById("information");
	
	//Avatar
	var imgAvatarElt = document.createElement("img");
	imgAvatarElt.src = user.avatar_url;
	divInformationElt.appendChild(imgAvatarElt);
	
	//Name (Nombre real)
        var nameElt = document.createElement("h1");
        nameElt.textContent = user.name;
        divInformationElt.appendChild(nameElt)	;

	//Login (Nombre de usuario)
	var loginElt = document.createElement("h2");
	loginElt.textContent = user.login;
	divInformationElt.appendChild(loginElt);

	//Bio
	var bioElt = document.createElement("p");
	bioElt.textContent = user.bio;
	divInformationElt.appendChild(bioElt);

	//Button repos
	var buttonRepos = document.createElement("button");
	buttonRepos.textContent = "repositorios";
	divInformationElt.appendChild(buttonRepos);

	buttonRepos.addEventListener("click", function(e){
        	var url = "https://api.github.com/users/" + user.login + "/repos"
	        ajaxGet(url, function(reply){
               		var repos = JSON.parse(reply);
                	//viewInformation(user);
                	console.log(repos);
        	});

	})
}


















