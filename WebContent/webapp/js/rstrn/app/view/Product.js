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

	dockedItems : [ {
		xtype : 'toolbar',
		ui : 'footer',
		layout : {
			pack : 'center'
		},
		defaults : {
			minWidth : 80
		},

		items : [ {
			text : 'Create',
			xtype : 'button',
			itemId : 'btnCreate',

		}, {
			text : 'Load Data',
			itemId : 'btnLoad'
		}, {
			text : 'Save',
			itemId : 'btnSave'
		}, {
			text : 'Delete',
			itemId : 'btnDelete'
		} ]

	} ],

});
