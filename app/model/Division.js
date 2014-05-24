/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.model.Division', {
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
            }
        ]
    }
});