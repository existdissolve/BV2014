/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.store.Teams', {
    extend: 'BV2014.store.Base',
    alias: 'store.team',
    requires: [
        'BV2014.model.Team'
    ],
    restPath: 'https://api.parse.com/1/classes/Team',
    config: {
        model: 'BV2014.model.Team',
        storeId: 'Teams',
        groupField: 'division',
        sorters: [
            {
                property: 'position',
                direction: 'ASC'
            }
        ]
    }
});