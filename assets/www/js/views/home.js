/**
 * 
 */
MyApp.HomePanel = Ext.extend(Ext.Panel, {
	layout : 'fit',
    fullscreen: true,
    //cls: 'homePage',
    //dockedItems: [toolbar1],
    //layout: 'fit',
    title: 'HEEEEEY',
    html: '<div style="position:absolute;top: 40%;position:absolute;left: 30%;"><img src="assets/sencha.png">&nbsp&nbsp;&nbsp&nbsp;<img src="assets/plusSign.gif"> <img src="assets/PhoneGapLogo-150x150.png"></div>',
    //animation: 'slide',
	initComponent : function() {
		this.dockedItems = this.buildDockedItems();
		this.items = {
				//xtype : 'ContactFormPanel'
		};
		
		MyApp.AppPanel.superclass.initComponent.call(this);
	},
	buildDockedItems : function() {
		return [
		        //this.buildTopDockToolbar(),
		        //this.buildLeftDockList(),
		        this.buildBottomDockToolBar()
		        ];
	},
	buildTopDockToolbar : function() {
		return {
			xtype : 'toolbar',
			dock : 'top',
			title : 'Contact Manager'
			};
	},
	buildLeftDockList : function() {
		return {
			xtype : 'panel',
			width : 220,
			dock : 'left',
			layout : 'fit',
			style : 'border-right: 1px solid;',
			items : [
			{
			xtype : 'ContactList',
			listeners : {
			scope : this,
			itemtap : this.onContactListItemTap,
			itemswipe : this.onContactListItemSwipe
			}
			}
			],
			dockedItems : [
			{
			xtype : 'toolbar',
			dock : 'top',
			title : 'Contacts'
			}
			]
			}
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
    			/*
    			listeners:  {
    		          'tap': function () {
    		        	  
    		        	  Ext.Msg.alert('Hello! in tap');
    		        	  Ext.dispatch({
    		                  controller: LandingController,
    		                  action: 'LandingPanel',
    		                  animation: {type:'slide', direction:'left'}
    		                });
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
    			listeners: {
    				//'beforeshow': showRecent
    			}

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
		//Ext.Msg.alert('Hello!', btn.action + ' was clicked!');
				
		Ext.dispatch({
			controller : btn.controller,
			action : btn.action,
			//model : model,
			views : {
			//contactForm : contactForm,
			//contactList : contactList
			}
			});
		},
	//},
	onContactListItemTap : function(ctList, itemIdx) {
		this.dispatchToCtcLstCtrlr(ctList, itemIdx, 'itemTap');
	},
	onContactListItemSwipe : function(ctList,itemIdx) {
		this.dispatchToCtcLstCtrlr(ctList, itemIdx, 'deleteContact');
	},
	dispatchToCtcLstCtrlr : function(ctList, itemIdx,action) {
		var contactForm = this.items.items[0];
		Ext.dispatch({
		controller : 'ContactListController',
		action : action,
		model : ctList.store.getAt(itemIdx),
		views : {
		contactForm : contactForm,
		contactList : ctList
		}
		});
	}
});	
