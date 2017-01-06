Ext.define('MyApp.view.Navigation', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.navigation',

	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	renderTo : document.body,
	root : {
		text : 'Root',
		expanded : true,
		children : [ {
			xtype : 'button',
			text : 'Home',
			leaf : true,
			id : 'homeButton'
		}, {
			xtype : 'button',
			text : 'Contact',
			leaf : true,
			id : 'contactButton'

		}, {
			xtype : 'button',
			text : 'Products',
			leaf : true,
			id : 'productsButton'

		}, {
			xtype : 'button',
			text : 'Puppies',
			leaf : true,
			id : 'puppiesButton'

		} ]
	},

	initComponent : function() {
		this.callParent(arguments);
	}
});