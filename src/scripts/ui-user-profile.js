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
                        var divElt = document.createElement("div");
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
                       var divElt = document.createElement("div");
                        divElt.classList.add("row")
                        divElt.innerHTML = `
                                <div class="col-md-auto">
                                        <h2 class="text-center">${user.login}</h2>
                                </div>                          

                        `
                        this.profileElt.appendChild(divElt);
                }

		// Div para contenido inferior
		const infoDiv = document.createElement("div");
		infoDiv.id = "infoDiv";
		infoDiv.classList.add("container");
		infoDiv.classList.add("my-4");
		this.profileElt.appendChild(infoDiv); 
		
		function ifDatos(dato, callback){
                        if(dato !== null && dato !== ""){
                                var divElt = document.createElement("div");
                                divElt.classList.add("row");
				divElt.id = dato;
				document.getElementById("infoDiv").appendChild(divElt);
				callback();
                        };
                };
		
		if(user.bio !== null && user.bio !== ""){
                                var divElt = document.createElement("div");
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
                                var divElt = document.createElement("div");
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
                                var divElt = document.createElement("div");
                                divElt.classList.add("row");
                                divElt.innerHTML = `
                                        <p><strong>Location: </strong>${user.location}</p>
                                `
                                document.getElementById("infoDiv").appendChild(divElt);
                };

		//Email
		if(user.email !== null && user.email !== ""){
			var divElt = document.createElement("div");
                        divElt.classList.add("row");
                        divElt.innerHTML = `
                        	<p><strong>Email: </strong>${user.email}</p>
                        `
                       	document.getElementById("infoDiv").appendChild(divElt);
		}	
		
		//Buttons Repos, Following, Following
		const buttonsDivElt = document.createElement("div");
		buttonsDivElt.innerHTML = `
                      <button class="btn btn-secondary btn-sm">repositorios ${user.public_repos}</button>
                      <button class="btn btn-warning btn-sm">Followers ${user.followers}</button>
                      <button class="btn btn-danger btn-sm">Following ${user.following}</button>
                `;
		document.getElementById("infoDiv").appendChild(buttonsDivElt);
	}
}

module.exports = UiProfile;









