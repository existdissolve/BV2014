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
    stores: [
        'Divisions',
        'Teams',
        'Matches',
        'Players',
        'Standings'
    ],
    controllers: [
        'Schedules',
        'Teams',
        'Standings',
        'MyTeam'
    ],
    /**
     * Launch method for application
     */
    launch: function() {
        var me = this;
        Ext.getStore( 'Matches' ).load({
            params:{
                include:'divisionId'
            },
            callback: function( matchRecords, operation, success ) {
                Ext.getStore( 'Teams' ).load({
                    params:{
                        include:'divisionId'
                    },
                    callback: function( records, operation, success ) {
                        if( success ) {
                            Ext.getStore( 'Players' ).load({
                                callback: function( records, operation, success ) {
                                    me.populateStandings( matchRecords );
                                    // do stuff
                                    BV2014.app.appReady = true;
                                    return;
                                    // Destroy the #appLoadingIndicator element
                                    //Ext.fly( 'appLoadingIndicator' ).destroy();
                                    // start it off :)
                                    Ext.Viewport.innerElement.addCls( 'viewport-inner' );
                                    Ext.Viewport.add({
                                        xtype: 'mainmenu'
                                    });
                                    // Initialize the main view
                                    Ext.Viewport.add( Ext.create('BV2014.view.Navigation') );
                                    
                                    // add menu to view port
                                    
                                    me.fireEvent( 'appready', me );
                                }
                            });
                        }
                        else {
                            Ext.Msg.alert( '', 'Sorry, something went wrong. Please close the app and try again.' )
                        }
                    }
                });
            }
        });
    },
    /**
     * Populates local standings store
     * @param {Ext.data.Model[]} records
     */
    populateStandings: function( records ) {
        var teams = {},
            store = Ext.getStore( 'Standings' ),
            teamStore = Ext.getStore( 'Teams' ),
            teamRecord,
            item, awayTeamId,homeTeamId,winningTeamId,team;
        for( var i=0; i<records.length; i++ ) {
            item = records[ i ];
            awayTeamId = item.get( 'awayTeamId' );
            homeTeamId = item.get( 'homeTeamId' );
            winningTeamId = item.get( 'winningTeamId' );
            if( !teams[ awayTeamId ] ) {
                teams[ awayTeamId ] = {
                    wins: 0,
                    losses: 0
                };
            }
            if( !teams[ homeTeamId ] ) {
                teams[ homeTeamId ] = {
                    wins: 0,
                    losses: 0
                };
            }
            // check if there is a winner
            if( !Ext.isEmpty( winningTeamId ) ) {
                if( awayTeamId==winningTeamId ) {
                    teams[ awayTeamId ].wins++;
                    teams[ homeTeamId ].losses++;
                }
                else if( homeTeamId==winningTeamId) {
                    teams[ homeTeamId ].wins++;
                    teams[ awayTeamId ].losses++;
                }
            }
        }
        // loop over teams and cast model instances
        for( var teamId in teams ) {
            team = teams[ teamId ];
            teamRecord = teamStore.findRecord( 'objectId', teamId );
            store.add({
                teamId: teamId,
                wins: team.wins,
                losses: team.losses,
                name: teamRecord.get( 'name' ),
                division: teamRecord.get( 'division' )
            });
        }
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
