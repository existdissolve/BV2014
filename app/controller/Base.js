/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.controller.Base', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'mainmenu button': {
                tap: 'onMenuButtonTap'
            }
        },
        views: [
            'Menu'
        ],
        refs: {
            Menu: 'mainmenu',
            Main: 'mainnav'
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
    setCurrentView: function( xtype, title ) {
        var me = this,
            currentView = me.getMain(),
            childView = currentView.getAt( 1 );

        if( childView ) {
            if( !childView.isXType( xtype ) ) {
                var destroyTarget = currentView.getAt( 1 );
                currentView.remove( destroyTarget, true );
                    currentView.add({
                    xtype: xtype
                });
            }
        }
        else {
            currentView.add({
                xtype: xtype
            });
        }
        currentView.down( 'titlebar' ).setTitle( title );
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
            case 'myteam': 
                me.getApplication().getController( 'MyTeam' ).fireEvent( 'baseroute', me, id );
                break;
            default: 
                me.redirectTo( 'schedule' );
                break;
        }
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
        me.redirectTo( button.getItemId() );
        menu.setOpen( false );
    }
});