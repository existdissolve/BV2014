/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.store.Matches', {
    extend: 'BV2014.store.Base',
    alias: 'store.match',
    requires: [
        'BV2014.model.Match'
    ],
    restPath: 'https://api.parse.com/1/classes/Match',
    config: {
        model: 'BV2014.model.Match',
        storeId: 'Matches',
        groupField: 'date'
    }
});