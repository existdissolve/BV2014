/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.Navigation', {
    extend: 'Ext.Container',
    alias: 'widget.mainnav',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        layout: {
            type: 'card',
            animation: null
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        iconCls: 'more',
                        itemId: 'moremenu',
                        handler: function() {
                            Ext.Viewport.child( 'mainmenu' ).toggle();
                        }
                    }
                ]
            }
        ]
    }
});