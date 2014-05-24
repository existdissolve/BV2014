/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.store.Divisions', {
    extend: 'BV2014.store.Base',
    alias: 'store.division',
    requires: [
        'BV2014.model.Division'
    ],
    restPath: 'https://api.parse.com/1/classes/Division',
    config: {
        model: 'BV2014.model.Division',
        storeId: 'Divisions'
    }
});