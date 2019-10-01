class UiProfile {
	constructor() {
		this.profileElt = document.getElementById("information");
	}
	
	viewProfile(user){
		this.profileElt.innerHTML = `
			<div class="col-md-12">
				<div class="col-md-5"></div>
				<div class="col-md-2">
					<img src=${user.avatar_url} class="rounded-circle container-fluid"/>
				</div>
				<div class="col-md-5"></div>
			</div>
			<h1>${user.name}</h1>
			<h2>${user.login}</h2>
			<div id="block-info">
			</div>
		`;
			
		//const bio = user.bio; 
		/*if(user.bio !== null){
			var block-info = document.getElementById("block-info");
			var pElt = document.createElement("p");
			pElt.textContent = user.bio;
			block-info.appendChild(pElt)
		}*/
	}
}

module.exports = UiProfile;









