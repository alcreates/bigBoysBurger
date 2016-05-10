var orm = require('../config/orm.js');


var burger = {

	selectAllBurger: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res)
		});

	},
	addBurger: function(nameInput, callback){
		orm.insertOne('burgers', nameInput, 0, callback);
	},

	eatBurger: function(inputId, callback){
		orm.updateOne('burgers', 1, inputId, callback);
	}
};

module.exports = burger;