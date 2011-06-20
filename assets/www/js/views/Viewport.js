/** */
//define docked items
var dockedItems = [];

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
    	this.dockedItems = this.buildDockedItems();
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
    },
	buildDockedItems : function() {
		return [
		        this.buildBottomDockToolBar()
		        ];
	},
	buildBottomDockToolBar : function() {
		return {
			xtype : 'tabbar',
			ui   : 'dark',
			dock : 'bottom',
			centered: 'true',
			layout: {
				pack: 'center'
			},
			defaults : {
				scope : this,
				handler : this.onBtnTap,
				controller : 'LandingController'
			},
			items : [
			{
			    title: 'Home',
			    id: 'tab6',
			    html: '<h1>Home</h1>',
			    action: 'homeClick',
			    cls: 'card card6',
			    iconCls: 'info'
			},
			{
    			title: 'Contact List',
    			id: 'tab3',
    			handler : this.onBtnTap,
    			html: '<h1>Contact Listing</h1>',
    			action: 'buttonClick',
    			badgeText: '2 New',
    			cls: 'card card3',
    			iconCls: 'download'
    			/* EX of using a listener for tap event
    			listeners:  {
    		          'tap': function () {
    		        	  Ext.Msg.alert('Hello in tap');
    		          }
    			}*/
			},
			{
    			title: 'About',
    			id: 'tab1',
    			handler : this.onBtnTap,
    			html: 'About',
    			action: 'aboutClick',
    			iconCls: 'info',
    			cls: 'card card4',
    		},
			/*{
			xtype : 'spacer'
			},*/
			{
    			title: 'Settings',
    			id: 'tab4',
    			html: '<h1>Settings</h1>',
    			action: 'settingsClick',
    			cls: 'card card5',
    			iconCls: 'settings',
    			badgeText: '4 Updatesss'
    		}
			]
			};
			
	},
	onBtnTap : function(btn) {
		Ext.dispatch({
			controller : btn.controller,
			action : btn.action,
			views : {}
			});
		},
});

Ext.reg('Viewport',MyApp.views.Viewport);
