/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.model.Player', {
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
                name: 'teamId',
                type: 'any',
                mapping: 'teamId.objectId'
            }
        ]
    }
});