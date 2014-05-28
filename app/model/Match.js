/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.model.Match', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'objectId',
        fields: [
            {
                name: 'objectId',
                type: 'string'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'court',
                type: 'string'
            },
            {
                name: 'rawDate',
                type: 'date',
                mapping: 'date.iso',
                convert: function( value, record ) {
                    return Ext.Date.parse( value, 'c' );
                }
            },
            {
                name: 'date',
                type: 'date',
                mapping: 'date.iso',
                convert: function( value, record ) {
                    return Ext.Date.format( Ext.Date.parse( value, 'c' ), 'Y-m-d' );
                }
            },
            {
                name: 'time',
                type: 'date',
                convert: function( value, record ) {
                    var time = Ext.Date.parse( record.raw.date.iso, 'c' );
                    var fixed = Ext.Date.add( time, Ext.Date.HOUR, 5 );
                    return Ext.Date.format( fixed, 'g:i A' );
                }
            },
            {
                name: 'divisionId',
                type: 'any',
                mapping: 'divisionId.objectId'
            },
            {
                name: 'division',
                type: 'any',
                mapping: 'divisionId.name'
            },
            {
                name: 'awayTeam',
                type: 'any',
                mapping: 'awayTeamId'
            },
            {
                name: 'awayTeamId',
                type: 'any',
                mapping: 'awayTeamId.objectId'
            },
            {
                name: 'homeTeam',
                type: 'any',
                mapping: 'homeTeamId'
            },
            {
                name: 'homeTeamId',
                type: 'any',
                mapping: 'homeTeamId.objectId'
            },
            {
                name: 'winningTeamId',
                type: 'any',
                mapping: 'winningTeamId.objectId'
            },
            {
                name: 'awayTeamScore',
                type: 'int'
            },
            {
                name: 'homeTeamScore',
                type: 'int'
            }
        ]
    }
});