/**
 * 
 */
MyApp.AppPanel = Ext.extend(Ext.Panel, {
	layout : 'fit',
	initComponent : function() {
		this.dockedItems = this.buildDockedItems();
		this.items = {
				xtype : 'ContactFormPanel'
		};
		
		MyApp.AppPanel.superclass.initComponent.call(this);
	},
	buildDockedItems : function() {
		return [
		        this.buildTopDockToolbar(),
		        this.buildNavigation(), /* add bottom nav here */
		        this.buildLeftDockList(),
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
			xtype : 'toolbar',
			dock : 'bottom',
			defaults : {
			scope : this,
			handler : this.onBtnTap,
			controller : 'ContactFormPanelController'
			},
			items : [
			{
			text : 'New',
			action : 'newContact'
			},
			{
			text : 'Save',
			action : 'saveContact'
			},
			{
			xtype : 'spacer'
			},
			{
			text : 'Delete',
			action : 'deleteContact',
			controller : 'ContactListController'
			}
			]
			};
	},
	buildNavigation : function() {
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
				controller : 'ContactFormPanelController'
			},
			items : [
			{
    			title: 'Downloads',
    			id: 'tab3',
    			html: '<h1>Downloads</h1>',
    			badgeText: '2 New',
    			cls: 'card card3',
    			iconCls: 'download'
    		},
			{
    			title: 'About',
    			id: 'tab1',
    			//html: '<h1>Bottom Tabs</h1><p>Docking tabs to the bottom will automatically change their style. The tabs below are type="light", though the standard type is dark. Badges (like the 4 &amp; Long title below) can be added by setting <code>badgeText</code> when creating a tab/card or by using <code>setBadge()</code> on the tab later.</p>',
    			html: 'About',
    			iconCls: 'info',
    			cls: 'card card1',
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
    			cls: 'card card4',
    			iconCls: 'settings',
    			badgeText: '4 Updates'
    		}
			]
			};
	},
	onBtnTap : function(btn) {
		var contactForm = this.items.items[0],
		leftDock = this.getDockedItems()[1],
		model = contactForm.getRecord(),
		contactList = leftDock.items.items[0];
		if (btn.action === 'deleteContact' && ! model) {
		return;
		}
		Ext.dispatch({
			controller : btn.controller,
			action : btn.action,
			model : model,
			views : {
			contactForm : contactForm,
			contactList : contactList
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
