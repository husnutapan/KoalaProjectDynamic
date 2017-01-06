Ext.define('MyApp.view.Portal', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.portal',
    autoRender: true,
    autoShow: true,
    autoDestroy: true,
    title: 'Admin Portal',


    requires: [,
        'MyApp.view.Home','MyApp.view.Contact'
    ],


    initComponent: function(){
        
        this.items = [{
            xtype: 'home'
        }];

        this.callParent(arguments);
    }
});