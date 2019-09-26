export function ajaxGet(url, callback){
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.addEventListener("load", function(){
		if(req.status >= 200 && req.status < 400){
			var reply = JSON.parse(req.responseText);
			//return reply;
			callback(reply)	
		}else {
			//Error de Servidor
			document.write(req.status + " " + req.statusText)
		}
	});

	//Error de Red
	req.addEventListener("error", function(){
		document.write("Error de Red")
	});

	req.send(null);
}
