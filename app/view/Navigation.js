/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.Navigation', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainnav',
    config: {
        items: [
            {
                xtype: 'schedulelist'
            }
        ]
    },
    onBackButtonTap: function() {
        this.fireEvent( 'back', this );
    }
});