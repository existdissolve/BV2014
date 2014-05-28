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
                    child = group.children[ x ];
                    if( child.get( 'teamId' ) == data.teamId ) {
                        data.xindex = parseInt( x ) + 1;
                        break;
                    }
                }
                break;
            } 
        }
        return data;
    }
});