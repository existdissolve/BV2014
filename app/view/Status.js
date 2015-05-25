/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.Status', {
    extend: 'Ext.dataview.List',
    requires: ['Ext.plugin.PullRefresh'],
    alias: 'widget.statuslist',
    config: {
        emptyText: 'Nothing to see here! ',
        plugins: {
            type: 'pullrefresh'
        },
        deferEmptyText: true,
        title: 'Field Status',
        store: 'Statuses',
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="session-wrap" style="display: flex;">',
                '<div style="width:100px;">',
                    '<span class="statusdate {type}">{[this.getDate(values)]}</span>',
                '</div>',
                '<div style="flex: 1;">{message}</div>',
            '</div>',
            {
                getDate: function(values) {
                    var store = Ext.getStore('Statuses'),
                        record = store ? store.findRecord('objectId', values.objectId) : null,
                        index = record ? store.indexOf(record) : null;
                    if(index==0 && values.type == 'open') {
                        return Ext.Date.format(new Date(), 'Y-m-d');
                    }
                    else {
                        return Ext.Date.format(values.messageDate, 'Y-m-d');
                    }
                }
            }
        )
    }
});