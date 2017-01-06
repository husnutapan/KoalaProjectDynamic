Ext.define('MyApp.view.Product', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.product',
	id : 'product',
	//store :  'Products' ,
	columns : [ {
		text : 'Name',
		dataIndex : 'name',
		flex : 1
	}, {
		text : 'Email',
		dataIndex : 'email',
		flex : 2
	}, {
		text : 'Phone',
		dataIndex : 'phone',
		flex : 1
	} ],
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'label',
			text : 'Store records count:',
		}, {
			xtype : 'displayfield',
			value : 'not loaded yet'
		}, {
			xtype : 'button',
			action : 'test',
			text : 'Test'
		} ]
	} ],

	initComponent : function() {
		this.callParent();
		this.on('render', this.loadStore, this);
	},
	loadStore : function() {
		var myStore = this.getStore('Products');
		myStore.load();

	}

});
