/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.MySchedule', {
    extend: 'Ext.dataview.List',
    alias: 'widget.myschedulelist',
    config: {
        emptyText: 'Nothing to see here! ',
        deferEmptyText: true,
        grouped: true,
        title: 'My Team Schedule',
        store: 'MySchedule',
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="session-wrap">',
                '<div class="teamwrap">',
                    
                    '<div class="flex-2">',
                        '<span class="swatch" style="background-color:{[this.getTeamColor( values.awayTeamId )]}">{[this.getDivision( values.division )]}</span>',
                        '<span class="teamname">{[this.getTeamName( values.awayTeamId )]}</span>',
                    '</div>',
                    '<div>',
                        '<span class="swatch filler">&nbsp;</span>',
                        '<strong>{time}</strong>',
                    '</div>',
                '</div>',
                '<span class="vs">vs</span>',
                '<div class="teamwrap">',
                    
                    '<div class="flex-2">',
                        '<span class="swatch" style="background-color:{[this.getTeamColor( values.homeTeamId )]}">{[this.getDivision( values.division )]}</span>',
                        '<span class="teamname">{[this.getTeamName( values.homeTeamId )]}</span>',
                    '</div>',
                    '<div>',
                        '<span class="swatch filler">&nbsp;</span>',
                        '{court}',
                    '</div>',
                '</div>',
            '</div>',
            {
                getTeamName: function( id ) {
                    return Ext.getStore( 'Teams' ).findRecord( 'objectId', id ).get( 'name' );
                },
                getTeamColor: function( id ) {
                    return Ext.getStore( 'Teams' ).findRecord( 'objectId', id ).get( 'color' );
                },
                getDivision: function( division ) {
                    return division.charAt( 0 ).toUpperCase();
                }
            }
        )
    }
});