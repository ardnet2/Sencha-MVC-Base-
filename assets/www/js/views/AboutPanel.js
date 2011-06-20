/** This is the about panel it is wrapped in the container panel*/
MyApp.AboutPanel = Ext.extend(Ext.Panel, {
	layout : 'fit',
    fullscreen: true,
    title: 'About',
    html: '<div style="position:absolute;top: 40%;position:absolute;left: 30%;"><div>About 1</div><div>About 2</div><div>About 3</div></div>',
	initComponent : function() {
		this.items = {
				/*if you want another obj here ex: */
				//xtype : 'SOMETHING HERE'
		};
		MyApp.AboutPanel.superclass.initComponent.call(this);
	}
});	

Ext.reg('AboutPanel',MyApp.AboutPanel);
