Ext.define('MyApp.store.Products', {
	extend : 'Ext.data.Store',
	alias : 'widget.Products',
	id : 'Products',
	autoLoad : true,
	jsonData : true,
	fields : [ 'name', 'quantity', 'price' ],
	proxy : {
		type : 'ajax',
		url : '/KoalaProjectDynamic/product/getProductList',
		actionMethods : {
			create : 'POST',
			read : 'POST',
			update : 'POST',
			destroy : 'POST'
		},
		reader : {
			type : 'json',
			root : 'products'
		}
	},

});
