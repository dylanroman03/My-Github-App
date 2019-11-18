class UiRepos {
	constructor(){
		this.container = document.getElementById("information");
	};

	viewRepos(repos){
		let contador = 0;
		this.container.innerHTML = "";
		repos.forEach(repo =>{
			this.container.innerHTML += `
				<div name="elementClick" class="card my-5" id="${contador}">
					<div class="card-header row">
						<svg class="m-2" xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"/></svg>
						<h5>
							<a href="#" class="card-title">${repo.owner.login}/</a>
						</h5>
						<h5>
							<a href="#" class="card-title">${repo.name}</a>
						</h5>
					</div>
					<div class="card-body">
						<p class="card-text">${repo.description}</p>
					</div>
					
				</div>
			`;
			contador++;
		})
		this.container.addEventListener("click", e =>{
			if (e.target.name === "elementClick") {
				let userNumber = e.target.id;
			}
		})	
	}
}

module.exports = UiRepos
