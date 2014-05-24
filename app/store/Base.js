/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.store.Base', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Rest'
    ],
    constructor: function( cfg ){
        var me = this;
        cfg = cfg || {};
        Ext.apply(cfg, {
            proxy: {
                type: 'rest',
                useDefaultXhrHeader: false,
                withCredentials: false,
                headers: {
                    'X-Parse-Application-Id': '7g69WafvfnqN8Q7GFrWgHdZgq2Urzs2VwHbkm3EV',
                    'X-Parse-REST-API-Key': 'QL98seFqMOQ3LlNSWnPukvF0Z5gYaYUxTylccRB2',
                    'Content-Type': 'application/json'
                },
                url: me.restPath,
                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            },
            pageSize: 1000
        })
        me.callParent([ cfg ]);
    }
});