class UiProfile {
	constructor() {
		this.profileElt = document.getElementById("information");
	}
	
	viewProfile(user){
		//Avatar del Usuario
		this.profileElt.innerHTML = `
			<div class="row">
				<div class="col-4"></div>
				<div class="col-4">
					<img src=${user.avatar_url} class="my-4 img-fluid rounded-circle"/>
				</div>
				<div class="col-4"></div>
			</div>
			`;

		//Nombre del Usuario
		if(user.name !== null){
                        let divElt = document.createElement("div");
			divElt.classList.add("row")
			divElt.innerHTML = `
				<div class="col-md-auto">
					<h1 class="text-center">${user.name}</h1>
				</div>			
			`
                        this.profileElt.appendChild(divElt);
                }

		//Login del Usuario
		if(user.login !== null){
                       	let divElt = document.createElement("div");
                	divElt.classList.add("row")
                        divElt.innerHTML = `
                                <div class="col-md-auto">
                                        <h2 class="text-center">${user.login}</h2>
                                </div>                          

                        `
                        this.profileElt.appendChild(divElt);
                }

		//Followers Y Following
		let followersFollowingElt = document.createElement("div");
                        followersFollowingElt.classList.add("row")
                        followersFollowingElt.innerHTML = `
                                <div class="col-6">
                                        <p class="text-center"><a href="#">Followers: ${user.followers}</a></p>
                                </div>
				<div class="col-6">
					<p class="text-center"><a href="#">Following: ${user.following}</a></p>
				</div>
                        `
                        this.profileElt.appendChild(followersFollowingElt);		

		// Div para contenido inferior
		const infoDiv = document.createElement("div");
		infoDiv.id = "infoDiv";
		infoDiv.classList.add("container");
		infoDiv.classList.add("my-4");
		this.profileElt.appendChild(infoDiv); 
		
		//Function ifDatos
		function ifDatos(dato, callback){
                        if(dato !== null && dato !== ""){
                                let divElt = document.createElement("div");
                                divElt.classList.add("row");
				divElt.id = dato;
				document.getElementById("infoDiv").appendChild(divElt);
				callback();
                        };
                };
		
		//User Bio
		if(user.bio !== null && user.bio !== ""){
                                let divElt = document.createElement("div");
                                divElt.classList.add("row");
                                divElt.innerHTML = `
                                	<div class="col-md-auto">
                                        	<p class="text-center">${user.bio}</p>
                                	</div>
				`
                                document.getElementById("infoDiv").appendChild(divElt);
                };

		
		//Blog del Usuario
		if(user.blog !== null && user.blog !== ""){
                                let divElt = document.createElement("div");
                                divElt.classList.add("row");
                                divElt.innerHTML = `
					<p><strong>Blog: </strong><a href=${user.blog}>${user.blog}</a></p>
				`
                                document.getElementById("infoDiv").appendChild(divElt);
                };

		
		//ID del Usuario
		const idElt = document.createElement("div");
		idElt.classList.add("row");
		idElt.innerHTML = `
			<p><strong>Id: </strong>${user.id}</p>
		`
		document.getElementById("infoDiv").appendChild(idElt);		
		
		//Fecha de creacion del usuario
		const createdElt = document.createElement("div");
                createdElt.classList.add("row");
                createdElt.innerHTML = `
                        <p><strong>created_at: </strong>${user.created_at}</p>
                `
                document.getElementById("infoDiv").appendChild(createdElt);
		
		//Tipo de Usuario
		const typeElt = document.createElement("div");
                typeElt.classList.add("row");
                typeElt.innerHTML = `
                        <p><strong>User Type: </strong>${user.type}</p>
                `
                document.getElementById("infoDiv").appendChild(typeElt);
		
		//Localizacion
		if(user.location !== null && user.location !== ""){
                                let divElt = document.createElement("div");
                                divElt.classList.add("row");
                                divElt.innerHTML = `
                                        <p><strong>Location: </strong>${user.location}</p>
                                `
                                document.getElementById("infoDiv").appendChild(divElt);
                };

		//Email
		if(user.email !== null && user.email !== ""){
			let divElt = document.createElement("div");
                        divElt.classList.add("row");
                        divElt.innerHTML = `
                        	<p><strong>Email: </strong>${user.email}</p>
                        `
                       	document.getElementById("infoDiv").appendChild(divElt);
		}	
		
		//Buttons Repos, Following, Following
		const buttonsInfoDivElt = document.createElement("div");
		buttonsInfoDivElt.classList.add("row");
		buttonsInfoDivElt.innerHTML = `
                	<div class="col">
				<div class="btn-group">
					<button class="btn btn-outline-secondary">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

					</button>
					<button class="btn btn-secondary">${user.public_repos}</button>
				</div>
			</div> 	
			<div class="col">
				<div class="btn-group">
					<button class="btn btn-outline-secondary">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"/></svg>	
					</button>
					<button class="btn btn-secondary">${user.public_gists}</button>
				</div>
			</div>
		`;
		document.getElementById("infoDiv").appendChild(buttonsInfoDivElt);
	}
}

module.exports = UiProfile;









