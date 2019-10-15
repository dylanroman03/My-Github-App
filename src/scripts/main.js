//import { ajaxGet } from './ajax.js';
import 'jquery';
import 'bootstrap';
import 'popper.js';
const { client_id, client_secret } = require('./config.json');
//const UiProfile = require('./ui-user-profile.js');
const AjaxGet = require('./ajax.js');
const UiErrorServer = require('./ui-server-connection.js');
const UiList = require('./ui-list-users.js');
const ajaxGet = new AjaxGet();
const uiErrorServer = new UiErrorServer();
//const uiProfile = new UiProfile();	 
const uiList = new UiList(); 

var exploreFormElt = document.getElementById("exploreForm");
var exploreInputElt = document.getElementById("exploreInput");

exploreFormElt.addEventListener("submit", (e) => {
	'use strict';
    	e.preventDefault();
	const nameUser = exploreInputElt.value;
	
	if(nameUser !== "") {
		 //let url = `https://api.github.com/users/${nameUser}?client_id=${client_id}&client_secret=${client_secret}` 
		let url = `https://api.github.com/search/users?q=${nameUser}`
		ajaxGet.calling(url, (users) => {
			//uiProfile.viewProfile(user);
			uiList.viewList(users);
			console.log(users);
		})
	}else {
		uiErrorServer.Mensaje()
	}
});


