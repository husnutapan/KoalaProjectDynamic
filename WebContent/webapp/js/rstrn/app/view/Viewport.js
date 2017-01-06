Ext.define('MyApp.view.Viewport', {
	extend : 'Ext.Viewport',
	id : 'SchoolViewport',

	layout : {
		type : 'border'
	},
	
	requires : [ 'MyApp.view.Navigation', 'MyApp.view.Portal' ],

	initComponent : function() {
		this.items = [ {
			region : 'north',
			margins : '0 0 5 0',
			title : 'Header (north region)',
			height : 100,
			html : 'Header information goes here'
		}, {
			region : 'west',
			title : 'Left bar (west region)',
			width : 150,
			xtype : 'navigation'
		}, {
			region : 'south',
			title : 'Footer (south region)',
			html : 'Footer Information goes here',
			height : 100
		}, {
			region : 'east',
			title : 'Right bar (East region)',
			width : 150,
			html : 'Important information goes here'
		}, {
			region : 'center',
			title : 'center content area (center region)',
			xtype : 'portal'
		} ];
		this.callParent(arguments);
	},
});