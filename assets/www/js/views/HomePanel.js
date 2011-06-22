/**
 * This is the home panel. This is the first panel that is viewed by default on app load, it is wrapped in the Container Panel, which has he bottom navigation
 */
MyApp.HomePanel = Ext.extend(Ext.Panel, {
	layout : 'fit',
    fullscreen: true,
    title: 'Home',
    html: '<div style="position:absolute;top: 40%;position:absolute;left: 30%;"><img src="assets/sencha.png">&nbsp&nbsp;&nbsp&nbsp;<img src="assets/plusSign.gif"> <img src="assets/PhoneGapLogo-150x150.png"></div>',
	initComponent : function() {
		this.items = {
				//xtype : 'SOMETHING COULD GO HERE'
		};
		
		MyApp.HomePanel.superclass.initComponent.call(this);
	}
});	

Ext.reg('HomePanel',MyApp.HomePanel);
