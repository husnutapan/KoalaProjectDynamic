Ext.define('MyApp.view.Contact', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contact',
    itemId: 'contact',
    width: 500,
    height: 400,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },


    initComponent: function(){
        this.items = [{
            xtype: 'component',
            autoEl: {
                tag: 'p',
                html: 'Here we will load the brand grid/form component'
            }
        }];


        this.callParent(arguments);
    }
});