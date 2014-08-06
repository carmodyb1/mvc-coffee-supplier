var products = require("../models/Products.js")

var controller = {
	
	index: function(req, res) {

		res.render('index', {
			coffeeProducts: products
		});
	
	}

}

module.exports = controller;
