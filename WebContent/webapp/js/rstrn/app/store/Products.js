Ext.define('MyApp.store.Products', {
	extend : 'Ext.data.Store',
	alias : 'widget.Products',
	id : 'Products',
	autoLoad : false,
	fields : [ 'name', 'email', 'phone' ],
	data : {
		'items' : [ {
			'name' : 'Lisa',
			"email" : "lisa@simpsons.com",
			"phone" : "555-111-1224"
		}, {
			'name' : 'Bart',
			"email" : "bart@simpsons.com",
			"phone" : "555-222-1234"
		}, {
			'name' : 'Homer',
			"email" : "homer@simpsons.com",
			"phone" : "555-222-1244"
		}, {
			'name' : 'Marge',
			"email" : "marge@simpsons.com",
			"phone" : "555-222-1254"
		} ]
	},
	proxy : {
		type : 'memory',
		reader : {
			type : 'json',
			root : 'items'
		}
	}

});