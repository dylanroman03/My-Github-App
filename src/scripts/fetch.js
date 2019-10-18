class FetchApi{
	constructor(){};

	calling(url, callback) {
       		fetch(url/*, {
       			method : "GET",
       			headers : {
       				"Accept" : ""
       			}
       		}*/)
       		.then(req => req.json())
        	.then(data => {
        		callback(data);             
		})
	}
}

module.exports = FetchApi;