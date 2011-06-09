/**
 * 
 */
Ext.regModel('LandingModel', {
	proxy : {
		type : 'localstorage',
		id : 'contactModel'
	},
	fields : [
	          'firstName',
	          'lastName'
	          ]
});

Ext.regStore({
	model : 'LandingModel',
	storeId : 'blah'
});

//manually add stuff to localstorage
/*
var theStore = Ext.StoreMgr.get('blah');
theStore.add({firstName:'erik',lastName: 'rules'});
theStore.sync();
*/

console.log('model here');

