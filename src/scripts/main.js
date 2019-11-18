//import { ajaxGet } from './ajax.js';
import 'jquery';
import 'bootstrap';
import 'popper.js';
const { client_id, client_secret } = require('./config.json');
const AjaxGet = require('./ajax.js');
const FetchApi = require('./fetch.js');
const UiErrorServer = require('./ui-server-connection.js');
const UiList = require('./ui-list-users.js');
const ajaxGet = new AjaxGet();
const uiErrorServer = new UiErrorServer();	 
const uiList = new UiList(); 
const fetchApi = new FetchApi();

var exploreFormElt = document.getElementById("exploreForm");
var exploreInputElt = document.getElementById("exploreInput");
var singUp = document.getElementById('iniciaSecion') 

singUp.href = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${client_id}` 

/*function viewConsoleUser(){
	console.log(params)
}*/

exploreFormElt.addEventListener("submit", (e) => {
	'use strict';
    e.preventDefault();
	const nameUser = exploreInputElt.value;

	if(nameUser !== "") {
		 //let url = `https://api.github.com/users/${nameUser}?client_id=${client_id}&client_secret=${client_secret}` 
		let url = `https://api.github.com/search/users?q=${nameUser}`
		fetchApi.calling(url, (users) => {
			//uiProfile.viewProfile(user);
			uiList.viewList(users);
			console.log(users);
		})
	}else {
		uiErrorServer.Mensaje()
	}
});


