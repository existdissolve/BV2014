/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.Schedule', {
    extend: 'Ext.dataview.List',
    alias: 'widget.schedulelist',
    config: {
        emptyText: 'Nothing to see here! ',
        deferEmptyText: false,
        grouped: true,
        title: 'Match Schedule',
        store: 'Matches',
        route: 'schedule',
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="session-wrap">',
                '<div class="flex-2 title-wrap">',
                    '<div class="">{date}</div>',
                '</div>',
            '</div>'
        )
    }
});