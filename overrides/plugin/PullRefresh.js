Ext.define('Ext.override.plugin.PullRefresh', {
    override: 'Ext.plugin.PullRefresh',
    onLatestFetched: function(operation) {
        this.callParent(arguments);
        this.parent.fireEvent('fetch');
    }
})