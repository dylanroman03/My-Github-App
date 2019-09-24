import { ajaxGet } from './ajax.js';
const { cient_id, client_secret } = require('/config.json');
 
var exploreFormElt = document.getElementById("exploreForm");
var exploreInputElt = document.getElementById("exploreInput");

exploreFormElt.addEventListener("submit", function (e) {
	'use strict';
    e.preventDefault();
	var nameUser = exploreInputElt.value;
	var url = "https://api.github.com/users/" + nameUser
	ajaxGet(url,function(reply){
		var user = JSON.parse(reply);
		viewInformation(user);
		console.log(user);
	});
});

//Function View Information para mostrar informacion
function viewInformation(user){
	var divInformationElt = document.getElementById("information");
	divInformationElt.innerHTML = " ";	

	//Avatar
	var imgAvatarElt = document.createElement("img");
	imgAvatarElt.src = user.avatar_url;
	divInformationElt.appendChild(imgAvatarElt);
    
	//Name (Nombre real)
        var nameElt = document.createElement("h1");
        nameElt.textContent = user.name;
        divInformationElt.appendChild(nameElt);

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
	buttonRepos.textContent = user.public_repos + " repositorios";
	divInformationElt.appendChild(buttonRepos);

	buttonRepos.addEventListener("click", function(e){
		var url = user.repos_url;
	        ajaxGet(url, function(reply){
               		var repos = JSON.parse(reply);
                	viewRepos(repos);
                	console.log(repos);
        	});

	})
}

function viewRepos(repos){
	var divInformationElt = document.getElementById("information");
	divInformationElt.innerHTML = " ";
	
	repos.forEach(function(repo){
		//Div de cada repo
		var divRepoElt = document.createElement("div");
		divInformationElt.appendChild(divRepoElt);

		//Nombre del repo
		var nameRepoElt = document.createElement("h2");
		nameRepoElt.textContent = repo.name;
		divRepoElt.appendChild(nameRepoElt)
		
		//language del Repo
		var languageRepoElt = document.createElement("p");
		languageRepoElt.textContent = repo.language;
		divRepoElt.appendChild(languageRepoElt);
		languageRepoElt.style.color = styleLanguage(repo.language);		

		//Description del repo
		var descriptionRepoElt = document.createElement("p");
		descriptionRepoElt.textContent = repo.description;
		divRepoElt.appendChild(descriptionRepoElt)

		//Boton commits repo
		var commitsRepoElt = document.createElement("button");
		commitsRepoElt.textContent = "commits";
		divRepoElt.appendChild(commitsRepoElt);

		commitsRepoElt.addEventListener("click", function(e){
			var url = "https://api.github.com/repos/" + repo.owner.login + "/" + repo.name + "/commits";
               		ajaxGet(url, function(reply){
                        	var commits = JSON.parse(reply);
    				viewCommits(commits);
                        	console.log(commits);
                	});
		})	
	})
}

function viewCommits(commits){
	//Limpiamos la Pantalla
	var divInformationElt = document.getElementById("information");
        divInformationElt.innerHTML = " ";

	commits.forEach(function(commit){
		
	})
}

function styleLanguage(e){
        var color
        switch(e){
                case "JavaScript" :
                        color = "yellow";
                        break;
                case "HTML" :
                        color = "red";
                        break;
        	case "Shell" :
			color = "green";
			break;
		case "C" :
			color = "#555555";
			break;
		case "C++" :
			color = "#f34b7d";
			break;
		case "Css" :
		case "Haskell" :
			color = "purple";
			break;
		case "Java" :
			color = "#b07219";
			break;
		case "CMake" :
			color = "#ccc";
			break; 
	}
        return color
}



















