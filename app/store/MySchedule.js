/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.store.MySchedule', {
    extend: 'Ext.data.Store',
    alias: 'store.myschedule',
    requires: [
        'Ext.data.proxy.Memory',
        'BV2014.model.Match'
    ],
    config: {
        model: 'BV2014.model.Match',
        groupField: 'date',
        proxy: {
            type: 'memory'
        },
        storeId: 'MySchedule',
        sorters: [
            {
                property: 'rawDate',
                direction: 'ASC'
            },
            {
                property: 'court',
                direction: 'ASC'
            }
        ]
    }
});