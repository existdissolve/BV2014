/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.model.Team', {
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
                name: 'color',
                type: 'string'
            },
            {
                name: 'position',
                type: 'int'
            },
            {
                name: 'divisionId',
                type: 'any',
                mapping: 'divisionId.objectId'
            }
        ]
    }
});