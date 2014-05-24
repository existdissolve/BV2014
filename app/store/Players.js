/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.store.Players', {
    extend: 'BV2014.store.Base',
    alias: 'store.player',
    requires: [
        'BV2014.model.Player'
    ],
    restPath: 'https://api.parse.com/1/classes/Player',
    config: {
        model: 'BV2014.model.Player',
        storeId: 'Players'
    }
});