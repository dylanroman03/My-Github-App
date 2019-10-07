class UiErrorServer{
	constructor(){
		this.AreaElt = document.getElementById("information");
	}

	Mensaje(){
		this.AreaElt.innerHTML = `
			<div class="row">
				<div class="col-md-auto">
					<p class="text-center">Ingresa un Usuario</p>
				</div>
			</div>
		`
	}
}

module.exports = UiErrorServer;
