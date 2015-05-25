/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.store.Statuses', {
    extend: 'BV2014.store.Base',
    alias: 'store.status',
    requires: [
        'BV2014.model.Status'
    ],
    restPath: 'https://api.parse.com/1/classes/Status',
    config: {
        autoLoad: true,
        model: 'BV2014.model.Status',
        storeId: 'Statuses',
        sorters: [{
            property: 'messageDate',
            direction: 'DESC'
        }]
    }
});