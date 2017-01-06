Ext.define('Product', {
	extend : 'Ext.data.Model',
	fields : [ 'name', 'email', 'phone' ],
	validations : [ {
		type : 'length',
		field : 'name',
		min : 5
	} ]
});