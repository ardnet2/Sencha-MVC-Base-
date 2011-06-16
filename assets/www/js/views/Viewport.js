/**
 * 
 */
//define docked items
var dockedItems = [];

var initMask;

//define viewport
MyApp.views.Viewport = Ext.extend(Ext.Panel, {
	id:'viewportPanel',
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
		//dock top and bottom layout
		dockedItems: dockedItems,
		listeners:{
			//listeners here
		},
    initComponent: function() {
        //put instances of cards into application namespace
    	//NOTE: order is important here!
        Ext.apply(MyApp.views, {
        	home: new MyApp.HomePanel(),
        	contactList: new MyApp.ContactList(),
        	landingList: new MyApp.LandingList(),
        	landingPanel: new MyApp.LandingPanel(),
        	appPanel: new MyApp.AppPanel(),
        	contactFormPanel: new MyApp.ContactFormPanel(),
        	aboutPanel: new MyApp.AboutPanel(),
        	settingsPanel: new MyApp.SettingsPanel()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
          items: [
                  	MyApp.views.home,
                  	MyApp.views.contactList,
                  	MyApp.views.landingList,
					MyApp.views.landingPanel,
					MyApp.views.appPanel,
					MyApp.views.contactFormPanel,
					MyApp.views.aboutPanel,
					MyApp.views.settingsPanel
				]
        });
				
        MyApp.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
