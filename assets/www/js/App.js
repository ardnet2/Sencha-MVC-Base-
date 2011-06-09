/**
 * 
 */
Ext.regApplication({
	name : 'MyApp',
	launch : function() {
		
		this.launched = true;
	    this.mainLaunch();
		
		/* EX of defining a view to come up on load
		new MyApp.HomePanel({
			fullscreen : true
		});
		*/
		
	},
	mainLaunch: function() {
    	if (!this.launched) {return;}
			//call the viewport where ALL the view are defined,
    		//view listed 1st will come up first on app load
			this.views.viewport = new this.views.Viewport();
    }
});