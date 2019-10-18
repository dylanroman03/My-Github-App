//UiProfile
const UiProfile = require('./ui-user-profile.js');
const uiProfile = new UiProfile();
//FetchApi
const FetchApi = require('./fetch.js');
const fetchApi = new FetchApi();

class UiList {
	constructor(){}	

	viewList(users){
		let contenedorElt = document.getElementById("information");
		contenedorElt.innerHTML = "";
		let contador = 0;
		users.items.forEach(user => {
			contenedorElt.innerHTML += `
				<div class="card my-5">
					<div class="card-header row">
						<div class="col-2">
							<img class="img-fluid rounded-circle" src="${user.avatar_url}" alt="Avatar">
            </div>
						<div class"col-10">
							<p>${user.login}</p>
						</div>
					</div>
					<div class="card-body">
						<h5 class="card-title">${user.login}</h5>
						<button id="${contador}" name="viewUserBtn" class="btn btn-primary">
							View Profile
						</button>
					</div>
				</div>
			`;

			contador++;
		});
		
		contenedorElt.addEventListener("click", function(e){
			if(e.target.name === "viewUserBtn"){
				let userNumber = e.target.id;
				let user = users.items[userNumber];
				let url =	`https://api.github.com/users/${user.login}`;
				fetchApi.calling(url, (user) => {
					uiProfile.viewProfile(user);
					console.log(user);
    		});
			}
		});
	}  	
};

module.exports = UiList;






