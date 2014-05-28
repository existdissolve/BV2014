/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.Teams', {
    extend: 'Ext.dataview.List',
    alias: 'widget.teamlist',
    config: {
        emptyText: 'Nothing to see here! ',
        deferEmptyText: true,
        grouped: true,
        title: '2014 Teams',
        store: 'Teams',
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="session-wrap">',
                '<div class="teamwrap">',
                    '<div class="flex-2">',
                        '<h3 class="teamname withcolor flexer" style="background-color:{color}">',
                            '<span class="flex-2">{name}</span>', 
                            '<span class="record-badge">{[this.getRecord( values.objectId )]}</span>',
                        '</h3>',
                        '<div class="widget">',
                            '<div class="widget-body">',
                                '<table class="players">{[this.getPlayers( values.objectId )]}</table>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
            {
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
        )
    }
});