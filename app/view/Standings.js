/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.Standings', {
    extend: 'Ext.dataview.List',
    alias: 'widget.standinglist',
    config: {
        emptyText: 'Nothing to see here! ',
        deferEmptyText: true,
        grouped: true,
        title: 'Standings',
        store: 'Standings',
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="session-wrap">',
                '<div class="teamwrap">',
                    '<div class="flex-2">',
                        '<span class="swatch" style="background-color:{[this.getTeamColor( values.teamId )]}">{xindex}</span>',
                        '<span class="teamname">{[this.getTeamName( values.teamId )]}</span>',
                    '</div>',
                    '<div>',
                        '<span class="swatch filler">&nbsp;</span>',
                        '<strong>{wins} - {losses}</strong>',
                    '</div>',
                '</div>',
            '</div>',
            {
                getTeamName: function( id ) {
                    return Ext.getStore( 'Teams' ).findRecord( 'objectId', id ).get( 'name' );
                },
                getTeamColor: function( id ) {
                    return Ext.getStore( 'Teams' ).findRecord( 'objectId', id ).get( 'color' );
                }
            }
        )
    },
    prepareData: function( data, index, record ) {
        var groups = record.stores[ 0 ].getGroups(),
            group,child;
        for( var i in groups ) {
            group = groups[ i ];
            if( data.division == group.name ) {
                // loop over children of group and find index
                for( var x in group.children ) {
                    parent = x != 0 ? group.children[ x-1 ] : null;
                    child = group.children[ x ];
                    if( child.get( 'teamId' ) == data.teamId ) {
                        // if we have a previous result
                        if( !Ext.isEmpty( parent ) ) {
                            var prevTotal = parseInt( parent.get( 'wins' ) ) - parseInt( parent.get( 'losses' ) ); 
                            var myTotal = parseInt( child.get( 'wins' ) ) - parseInt( child.get( 'losses' ) ); 
                            // if the total wins/losses are the same to previous team, use the same rank (tied)
                            if( prevTotal == myTotal ) {
                                data.xindex = parent.data.xindex;
                            }
                            // otherwise, add a rank
                            else {
                                data.xindex = parent.data.xindex + 1;
                            }
                        }
                        // if there is no previous result, this is first place team
                        else {
                            data.xindex = 1;
                        }
                        break;
                    }
                }
                break;
            } 
        }
        return data;
    }
});