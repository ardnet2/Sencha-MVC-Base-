/**
 * 
 */
MyApp.SettingsPanel = Ext.extend(Ext.form.FormPanel, {
	defaultType : 'textfield',
	scroll : 'vertical',
	defaults : {
		labelWidth : 65
	},
	initComponent : function() {
		this.items = this.buildItems();
		MyApp.SettingsPanel.superclass.initComponent.call(this);
	},
	buildItems : function() {
		return [
		        {
		        	label : 'First',
		        	name : 'firstName'
		        },
		        {
		        	label : 'Last',
		        	name : 'lastName'
		        },
		        {
		        	label : 'User',
		        	name : 'username'
		        },
		        {
		        	label : 'Pass',
		        	name : 'email'
		        },
		        {
		        	label : 'Twitter',
		        	name : 'twitter'
		        },
		        {
		        	label : 'FB',
		        	name : 'facebook'
		        },
		        {
		        	label : 'Web',
		        	name : 'website'
		        }
		       ]
	}
});

Ext.reg('SettingsPanel',MyApp.SettingsPanel);