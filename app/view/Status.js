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
                index: 0,
                getIndex: function() {
                    this.index = this.index + 1;
                    return this.index;
                },
                getDate: function(values) {
                    var index = this.getIndex();
                    if(index==1 && values.type == 'open') {
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