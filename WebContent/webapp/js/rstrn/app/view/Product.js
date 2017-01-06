Ext.define('MyApp.view.Product', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.product',
	id : 'product',
	columns : [ {
		text : 'Name',
		dataIndex : 'name',
		flex : 1
	}, {
		text : 'Quantity',
		dataIndex : 'quantity',
		flex : 1
	}, {
		text : 'Price',
		dataIndex : 'price',
		flex : 1
	} ],

	initComponent : function() {
		this.callParent();
	}

});
