Ext.define('MyApp.controller.Navigation', {
	extend : 'Ext.app.Controller',
	alias : 'widget.navigationController',

	refs : [ {
		ref : 'portal',
		selector : 'portal'
	}, {
		ref : 'contact',
		selector : 'contact',
		xtype : 'contact',
		autoCreate : true
	}, {
		ref : 'home',
		selector : 'home',
		xtype : 'home',
		autoCreate : true
	}, {
		ref : 'product',
		selector : 'product',
		xtype : 'product',
		autoCreate : true
	} ],

	requires : [ 'MyApp.view.Navigation' ],

	init : function(application) {

		this.control({

			'navigation' : {
				itemclick : function(tree, record) {
					if (record.getId() == 'homeButton') {
						this.homeClickMethod();
					}
					;
					if (record.getId() == 'contactButton') {
						this.contactClickMethod();
					}
					;
					if (record.getId() == 'productsButton') {
						this.productsClickMethod();
					}
					;
					if (record.getId() == 'puppiesButton') {
						this.puppiesClickMethod();
					}
					;
				}
			}
		});

	},

	homeClickMethod : function() {
		console.log('home clicked');
		var portal = this.getPortal();
		portal.removeAll(true);
		portal.add(this.getHome());
		portal.doLayout();

	},
	contactClickMethod : function() {
		console.log('contact clicked');
		var portal = this.getPortal();
		portal.removeAll(true);
		portal.add(this.getContact());
		portal.doLayout();
	},
	productsClickMethod : function() {
		console.log('products clicked');
		var portal = this.getPortal();
		portal.removeAll(true);
		portal.add(this.getProduct());
		portal.doLayout();

	},
	puppiesClickMethod : function() {
		console.log('puppies clicked');
	}
});