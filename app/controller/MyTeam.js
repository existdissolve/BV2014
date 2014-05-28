/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.controller.MyTeam', {
    extend: 'BV2014.controller.Base',
    requires: [
        'Ext.Picker'
    ],
    config: {
        views: [
            'MyTeam',
            'MySchedule'
        ],
        stores: [
            'MySchedule'
        ],
        refs: {
            MyTeam: 'myteam'
        },
        control: {
            'button#chooseteam': {
                tap: 'showTeamSelector'
            },
            'picker': {
                change: 'setMyTeam'
            }
        }
    },
    /**
     * Handles base route event
     * @private
     * @param {Ext.app.Controller} controller
     * @param {Number} id
     */
    onBaseRoute: function( controller, id ) {
        var me = this;
        me.setCurrentView( 'myteam', 'MyTeam' );
    },
    setMyTeam: function( picker, value, eOpts ) {
        var me = this,
            value = value.myteam;
        window.localStorage.setItem( 'myteam', value );
        me.updateContent();
    },
    updateContent: function() {
        var setting = window.localStorage.getItem( 'myteam' ),
            team = Ext.getStore( 'Teams' ).findRecord( 'objectId', setting ),
            panel = Ext.ComponentQuery.query( 'myteam' )[ 0 ];

        panel.setData( team.data );
        var data = Ext.getStore( 'Matches' ).getRange();
        var store = Ext.getStore( 'MySchedule' );
        store.clearFilter();
        store.removeAll();
        store.add( data );
        store.filterBy( function( record, id ) {
            if( record.get( 'awayTeamId' ) == team.get( 'objectId' ) || record.get( 'homeTeamId' ) == team.get( 'objectId' ) ) {
                return true;
            }
            else {
                return false;
            }
        });
    },
    showTeamSelector: function( btn, e, eOpts ) {
        var me = this;
        var data = [];
        Ext.getStore( 'Teams' ).each(function( item, records, length ) {
            data.push({
                text: item.get( 'name' ),
                value: item.get( 'objectId' )
            });
        });
        var picker = Ext.create('Ext.Picker', {
            slots: [
                {
                    name : 'myteam',
                    itemId: 'myteampicker',
                    title: 'Select Your Team',
                    data : data
                }
            ]
        });
        Ext.Viewport.add( picker );
        picker.show();
    }
});