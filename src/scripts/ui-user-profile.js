class UiProfile {
	constructor() {
		this.divInformationElt = document.getElementById("information");
	}
	
	viewProfile(user){
		this.divInformationElt.innerHTML = `
			<img src=${user.avatar_url}/>
			<h1>${user.name}</h1>
			<h2>${user.login}</h2>
			<div>
			</div>
		`;	
	}
}

module.exports = UiProfile;
