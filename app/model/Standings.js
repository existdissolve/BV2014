/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.model.Standings', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'teamId',
        fields: [
            {
                name: 'teamId',
                type: 'string'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'division',
                type: 'string'
            },
            {
                name: 'wins',
                type: 'int'
            },
            {
                name: 'losses',
                type: 'int'
            }
        ]
    }
});