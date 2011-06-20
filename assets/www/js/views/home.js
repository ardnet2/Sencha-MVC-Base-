/**
 * 
 */
MyApp.HomePanel = Ext.extend(Ext.Panel, {
	layout : 'fit',
    fullscreen: true,
    title: 'Home',
    html: '<div style="position:absolute;top: 40%;position:absolute;left: 30%;"><img src="assets/sencha.png">&nbsp&nbsp;&nbsp&nbsp;<img src="assets/plusSign.gif"> <img src="assets/PhoneGapLogo-150x150.png"></div>',
	initComponent : function() {
		this.items = {
				//xtype : 'ContactFormPanel'
		};
		
		MyApp.HomePanel.superclass.initComponent.call(this);
	},
	buildDockedItems : function() {
		return [
		        //refactored to viewport
		        ];
	}
});	

Ext.reg('HomePanel',MyApp.HomePanel);
