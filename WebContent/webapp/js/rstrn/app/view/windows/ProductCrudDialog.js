Ext.define('MyApp.view.windows.ProductCrudDialog', {
	extend : 'Ext.window.Window',
	alias : 'widget.ProductCrudWindow',
	autoShow : true,
	title : 'Product Crud Dialog Window',
	items : [ {
		xtype : 'form',
		bodyPadding : 5,
		flex : 1,
		defaultType : 'textfield',
		items : [ {
			name : 'name',
			fieldLabel : 'Name'
		}, {
			name : 'quantity',
			fieldLabel : 'Quantity'
		}, {
			name : 'price',
			fieldLabel : 'Price',
		} ]
	} ],

	buttons : [ {
		text : 'Update',
		itemId : 'updateButton',
		action : 'update',
	}, {
		text : 'Delete',
		itemId : 'deleteButton',
		action : 'delete',
	}, {
		text : 'Cancel',
		iconCls : 'button-cancel',
	} ]
});