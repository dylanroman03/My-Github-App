class AjaxGet {
	constructor(){}
	
	calling(url, headers, callback){
		var req = new XMLHttpRequest();
		req.open("GET", url, true);
		req.setRequestHeader('Accept', headers)
		req.addEventListener("load", () => {
			if(req.status >= 200 && req.status < 400){
				var reply = JSON.parse(req.responseText);
				//return reply;
				callback(reply);	
			}else {
				//Error de Servidor
				document.write(req.status + " " + req.statusText)
			}
		});
	
		//Error de Red
		req.addEventListener("error", () => document.write("Error de Red"));

		req.send(null);
	}
};

module.exports = AjaxGet;










