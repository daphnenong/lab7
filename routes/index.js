var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	projects['viewAlt'] = false;
	console.log("passed")
  	response.render('index', projects);
};


exports.viewAlt = function (request, response) {
	projects['viewAlt'] = true;
	console.log("true")
	response.render('index', projects);
  };