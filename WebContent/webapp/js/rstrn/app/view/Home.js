Ext.define('MyApp.view.Home', {
	extend : 'Ext.container.Container',
	alias : 'widget.home',
	width : 500,
	height : 400,
	layout : {
		type : 'vbox',
		align : 'center',
		pack : 'center'
	},

	initComponent : function() {

		this.items = [ {
			xtype : 'component',
			autoEl : {
				tag : 'p',
				html : 'Lorem Ipsum is simply dummy text'
			}
		} ];
		this.callParent(arguments);
	}
});