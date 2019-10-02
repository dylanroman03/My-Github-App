class UiProfile {
	constructor() {
		this.profileElt = document.getElementById("information");
	}
	
	viewProfile(user){
		this.profileElt.innerHTML = `
			<div class="card">
				<div class="col-md-5"></div>
				<div class="col-md-2">
					<img src=${user.avatar_url} class="rounded-circle img-responsive"/>
				</div>
				<div class="col-md-5"></div>
			</div>
			`;

		if(user.name !== null){
                        var h1Elt = document.createElement("h1");
                        h1Elt.textContent = user.name;

                        this.profileElt.appendChild(h1Elt);
                }

		if(user.login !== null){
                        var h2Elt = document.createElement("h2");
                        h2Elt.textContent = user.login;

                        this.profileElt.appendChild(h2Elt);
                }

		// Div para contenido inferior
		const infoDiv = document.createElement("div");
		infoDiv.id = "infoDiv"
		this.profileElt.appendChild(infoDiv); 

		if(user.bio !== null){
			var pElt = document.createElement("p");
			pElt.textContent = user.bio;
			infoDiv.appendChild(pElt)
		}
		
		if(user.blog !== null){
			var aElt = document.createElement("a");
			aElt.href = user.blog;
			aElt.textContent = "Blog"
			document.getElementById("infoDiv").appendChild(aElt);
		}
		
		//Buttons Repos, Following, Following
		const buttonsDivElt = document.createElement("div");
		buttonsDivElt.innerHTML = `
                      <button class="btn btn-secondary btn-sm">repositorios ${user.public_repos}</button>
                      <button class="btn btn-warning btn-sm">Followers ${user.followers}</button>
                      <button class="btn btn-danger btn-sm">Following ${user.following}</button>
                `;
		document.getElementById("infoDiv").appendChild(buttonsDivElt)
	}
}

module.exports = UiProfile;









