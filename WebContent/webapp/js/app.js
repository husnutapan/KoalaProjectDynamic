Ext.application({
	name : 'MyApp',
	appFolder : 'webapp/js/rstrn/app',

	controllers : [ 'Navigation', 'Product'],

	launch : function() {
		Ext.QuickTips.init();
		var cmp1 = Ext.create('MyApp.view.Viewport', {
			renderTo : Ext.getBody()
		});
		cmp1.show();
	}
});
