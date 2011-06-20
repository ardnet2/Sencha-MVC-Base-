/**
 * 
 */
///NEW LISTING
MyApp.LandingList = Ext.extend(Ext.List, {
	title: 'Contact Listing',
	store : Ext.StoreMgr.get('blah'),
	itemTpl : '{lastName}, {firstName}',
	emptyText : 'No contacts defined.',
	allowDeselect : false,
	onRender : function() {
		MyApp.LandingList.superclass.onRender.apply(this, arguments);
		this.store.load();
	}
});

Ext.reg('LandingList', MyApp.LandingList);