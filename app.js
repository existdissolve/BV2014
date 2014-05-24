/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'BV2014',

    requires: [
        'Ext.MessageBox',
        'BV2014.view.Menu',
        'BV2014.view.Navigation'
    ],

    views: [
        'Main'
    ],
    stores: [
        'Divisions',
        'Teams',
        'Matches',
        'Players'
    ],
    controllers: [
        'Schedules'
    ],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        var me = this;
        Ext.getStore( 'Teams' ).load({
            params:{
                include:'divisionId'
            },
            callback: function( records, operation, success ) {
                if( success ) {
                    Ext.getStore( 'Players' ).load({params:{include:'teamId'}});
                    Ext.getStore( 'Matches' ).load({params:{
                        include:'divisionId'
                    }});
                    // do stuff
                    BV2014.app.appReady = true;
                    // Destroy the #appLoadingIndicator element
                    Ext.fly( 'appLoadingIndicator' ).destroy();
                    // start it off :)
                    Ext.Viewport.innerElement.addCls( 'viewport-inner' );
                    // Initialize the main view
                    Ext.Viewport.add( Ext.create('BV2014.view.Navigation') );
                    // add menu to view port
                    Ext.Viewport.add({
                        xtype: 'mainmenu'
                    });
                    me.fireEvent( 'appready', me );
                }
                else {
                    Ext.Msg.alert( '', 'Sorry, something went wrong. Please close the app and try again.' )
                }
            }
        });
    },
    isAppReady: function() {
        return BV2014.app.appReady;
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
