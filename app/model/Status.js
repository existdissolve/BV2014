/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.model.Status', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'objectId',
        fields: [
            {
                name: 'objectId',
                type: 'string'
            },
            {
                name: 'type',
                type: 'string'
            },
            {
                name: 'message',
                type: 'string'
            },
            {
                name: 'messageDate',
                type: 'date',
                dateFormat: 'Y-m-d'
            }
        ]
    }
});