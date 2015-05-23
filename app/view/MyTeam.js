/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.MyTeam', {
    extend: 'Ext.Panel',
    alias: 'widget.myteam',
    config: {
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'myschedulelist',
                docked: 'bottom',
                items: {
                    xtype: 'titlebar',
                    ui: 'dark',
                    docked: 'top',
                    title: 'My Team Schedule'
                },
                height: '50%'
            }
        ],
        tpl: Ext.create('Ext.XTemplate', 
            '<tpl for=".">',
                '<div style="padding:10px;">',
                    '<div class="session-wrap">',
                        '<div class="teamwrap">',
                            '<h3 class="teamname withcolor flexer" style="background-color:{color}">',
                                '<span class="flex-2">{name}</span>', 
                                '<span class="record-badge">{[this.getRecord( values.objectId )]}</span>',
                            '</h3>',
                        '</div><br />',
                        '<h3>My Teammates</h3>',
                        '<div class="widget">',
                            '<div class="widget-body">',
                                '<table class="players">{[this.getPlayers( values.objectId )]}</table>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
            '</tpl>',
            {
                getTeamColor: function( id ) {
                    return Ext.getStore( 'Teams' ).findRecord( 'objectId', id ).get( 'color' );
                },
                getDivision: function( division ) {
                    return division.charAt( 0 ).toUpperCase();
                },
                getPlayers: function( teamId ) {
                    var players = '';
                    var store = Ext.getStore( 'Players' );
                    store.filter( 'teamId', teamId );
                    store.each( function( item, index, length ) {
                        if( teamId == item.get( 'teamId' ) ) {
                            //players += item.get( 'name' );
                            if( index==0 || index % 2 == 0 ) {
                                players += '<tr>';
                            }
                            players += '<td>' + item.get( 'name' ) + '</td>';
                            if( index % 2 == 0 && index+1==length ) {
                                players += '<td>&nbsp;</td>';
                            }
                            if( index % 2 == 1 ) {
                                players += '</tr>';
                            }
                        }
                    });
                    return players;
                },
                getRecord: function( teamId ) {
                    var result = Ext.getStore( 'Standings' ).findRecord( 'teamId', teamId );
                    return result.get( 'wins' ) + ' - ' + result.get( 'losses' );
                }
            }
        ),
        listeners: {
            show: function( panel, opts ) {
                panel.up( 'mainnav' ).down( 'titlebar' ).add({
                    xtype: 'button',
                    align: 'right',
                    itemId: 'chooseteam',
                    iconCls: 'user'
                });
                // see if there is a team already selected
                var setting = window.localStorage.getItem( 'myteam' );
                if( setting ) {
                    BV2014.app.getController( 'MyTeam' ).updateContent();
                }
                else {
                    panel.setHtml( '<p style="margin:10px;">You haven\'t selected a team yet!!!</p>' );
                }
            },
            destroy: function( opts ) {
                Ext.ComponentQuery.query( 'button#chooseteam' )[ 0 ].destroy();
            }
        }
    }
});