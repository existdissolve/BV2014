/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.controller.Base', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'mainmenu button': {
                tap: 'onMenuButtonTap'
            },
            'navigationview': {
                back: 'onNavigationViewBack',
                push: 'onNavigationViewPush',
                pop:  'onNavigationViewPop'
            }
        },
        views: [
            'Menu'
        ],
        refs: {
            Menu: 'mainmenu'
        },
        routes: {
            '': 'onNavigationDeepLink',
            ':id': 'onNavigationDeepLink'
        },
        before: {
            onNavigationDeepLink: 'checkAppStatus'
        }
    },
    /**
     * Initialization for this controller
     */
    init: function() {
        var me = this;
        me.on( 'baseroute', me.onBaseRoute );
        me.callParent( arguments );
    },
    /**
     * Sets the current view from menu click 
     * @param {String} xtype
     */
    setCurrentView: function( xtype ) {
        var me = this,
            currentView = Ext.Viewport.getAt( 2 );
        
        if( !currentView || !currentView.isXType( xtype ) ) {
            Ext.Viewport.removeAt( 2 );
            Ext.Viewport.add({ xtype: xtype });
        }
    },
    /**
     * Determines if app is full loaded; if not, blocks auto-route resolution until app is ready
     * @param {Object} action
     */
    checkAppStatus: function( action ) {
        var me = this,
            app = me.getApplication();
        if( app.isAppReady() ) {
            action.resume()
        }
        else {
            app.on( 'appready', function(){
                action.resume();
            });
        }
    },
    /**
     * Determines if social sharing is allowed
     * @return {Boolean}
     */
    isSharingSupported: function() {
       var me = this;
       return window.plugins && window.plugins.socialsharing ? true : false;
    },
    /**
     * Handler for navigation deep link events
     * @private
     * @param {Number} id
     */
    onNavigationDeepLink: function( id ) {
        var me = this;
        switch( id ) {
            case 'schedule': 
                me.getApplication().getController( 'Schedules' ).fireEvent( 'baseroute', me, id );
                break;
            case 'teams': 
                me.getApplication().getController( 'Teams' ).fireEvent( 'baseroute', me, id );
                break;
            case 'standings': 
                me.getApplication().getController( 'Standings' ).fireEvent( 'baseroute', me, id );
                break;
            default: 
                me.redirectTo( 'schedule' );
                break;
        }
    },
    /**
     * Handles global navigation pop events
     * @private
     * @param {Ext.navigation.View} navigationview
     * @param {Mixed} view
     * @param {Objects} eOpts
     */
    onNavigationViewPop: function( navigationview, view, eOpts ) {
        var me = this,
            button = navigationview.down( '#moremenu' ),
            survey = navigationview.down( '#survey' ),
            favorite = navigationview.down( '#favorite' ),
            notification = navigationview.down( '#notification' ),
            sharing = navigationview.down( '#sessionshare' );
        if( button ) {
            button.show();
        }
        if( survey ) {
            survey.destroy();
        }
        if( favorite ) {
            favorite.destroy();
        }
        if( notification ) {
            notification.destroy();
        }
        if( sharing ) {
            sharing.destroy();
        }
    },
    /**
     * Handles global navigation push events
     * @private
     * @param {Ext.navigation.View} navigationview
     * @param {Mixed} view
     * @param {Objects} eOpts
     */
    onNavigationViewPush: function( navigationview, view, eOpts ) {
        var me = this,
            button = navigationview.down( '#moremenu' ),
            survey = navigationview.down( '#survey' ),
            favorite = navigationview.down( '#favorite' ),
            notification = navigationview.down( '#notification' );
        if( button ) {
            button.hide();
        }
    },
    /**
     * Handles global navigation back button events
     * @private
     * @param {Ext.navigation.View} navigationview
     * @param {Objects} eOpts
     */
    onNavigationViewBack: function( navigationview, eOpts ) {
        var me = this;
        me.redirectTo( navigationview.getPreviousItem().getRoute() );
        return false;
    },
    /**
     * Handles menu button tap so we can attach routing actions
     * @private
     * @param {Ext.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    onMenuButtonTap: function( button, e, eOpts ) {
        var me = this,
            menu = me.getMenu();
        if( button.getItemId()=='twitterviews' && Ext.os.is.iOS && ( window.plugins ) ) {
            menu.setOpen( false );
            //ITB.app.openExternalURL( 'http://k-rudy.github.io/phonegap-twitter-timeline?456052005060874240' );
            window.open(encodeURI('http://k-rudy.github.io/phonegap-twitter-timeline?456052005060874240'), '_blank', 'location=no');
        }
        else {
            me.redirectTo( button.getItemId() );
            menu.setOpen( false );
        }
    },
    /**
     * Handles tab panel change so we can attach routing actions
     * @private
     * @param {Ext.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    onTabPanelChange: function( button, e, eOpts ) {
        var me = this,
            tabPanel = me.getMain(),
            index = button.up( 'tabbar' ).indexOf( button );
        // redirect
        me.redirectTo( tabPanel.getInnerItems()[ index ].getItemId() );
        // return false to override default tab panel management
        return false;
    }
});