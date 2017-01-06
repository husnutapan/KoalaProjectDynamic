Ext.define('MyApp.controller.Product', {
	extend : 'Ext.app.Controller',
	alias : 'widget.ProductController',
	refs : [ {
		ref : 'productView',
		selector : 'product',
		xtype : 'product',
		autoCreate : true
	} ],
	views : [ 'MyApp.view.Product' ],

	store : [ 'MyApp.store.Products' ],

	init : function(application) {

		this.control({
			'product' : {
				render : this.loadItem
			}
		});
	},

	loadItem : function() {
		var myStore = this.getStore('Products');
		this.getProductView().getView(0).bindStore(myStore);
	}

});