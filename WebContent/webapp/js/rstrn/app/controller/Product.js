Ext.define('MyApp.controller.Product', {
	extend : 'Ext.app.Controller',
	alias : 'widget.ProductController',
	refs : [ {
		ref : 'productView',
		selector : 'product',
		xtype : 'product',
		autoCreate : true
	}, {

		ref : 'ProductCrudWindow',
		selector : 'ProductCrudWindow',
		autoCreate : true
	} ],
	views : [ 'MyApp.view.Product', 'MyApp.view.windows.ProductCrudDialog' ],

	store : [ 'MyApp.store.Products' ],

	init : function(application) {

		this.control({
			'product' : {
				render : this.loadItem,
				itemdblclick : function(grid, record) {
					var window = Ext.widget('ProductCrudWindow');
					window.down('form').loadRecord(record);
					window.show();
				}
			}

		});
	},

	loadItem : function() {
		var myStore = this.getStore('Products');
		this.getProductView().getView(0).bindStore(myStore);
	}

});