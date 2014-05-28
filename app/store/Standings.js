/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.store.Standings', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Memory',
        'BV2014.model.Standings'
    ],
    config: {
        proxy: {
            type: 'memory'
        },
        storeId: 'Standings',
        model: 'BV2014.model.Standings',
        groupField: 'division',
        sorters: [
            {
                property: 'wins',
                direction: 'DESC'
            },
            {
                property: 'losses',
                direction: 'ASC'
            },
            {
                property: 'name',
                direction: 'ASC'
            }
        ]
    }
});