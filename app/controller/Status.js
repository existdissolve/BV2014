/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.controller.Status', {
    extend: 'BV2014.controller.Base',
    config: {
        stores: [
            'Statuses'
        ],
        views: [
            'Status',
            'Menu'
        ],
        refs: {
            StatusList: 'statuslist'
        },
        control: {
            'statuslist': {
                fetch: 'setStatusIndicator'
            }
        }
    },
    /**
     * Handles base route event
     * @private
     * @param {Ext.app.Controller} controller
     * @param {Number} id
     */
    onBaseRoute: function( controller, id ) {
        var me = this;
        me.setCurrentView( 'statuslist', 'Field Status' );
    },
    /**
     * Run code on initialization
     */
    init: function() {
        var me = this,
            store = Ext.getStore('Statuses');
        store.on('load', function(store, data, eOpts) {
            me.setStatusIndicator();
        });
        this.callParent(arguments);
    },
    /**
     * Sets status indicator based on store data
     */
    setStatusIndicator: function() {
        var me = this,
            store = Ext.getStore('Statuses'),
            menu = me.getMenu(),
            record = store.getCount() ? store.first() : null,
            menuItem, text, color;
 
        if(menu) {
            menuItem = menu.down('#status')
            if(record) {
                text = record.get('type')=='open' ? 'Fields are open' : 'Fields are closed';
                color = record.get('type')=='open' ? 'yellowgreen' : 'red';
            }
            else {
                text = 'Field status unknown';
                color = 'grey';
            }
            menuItem.setText(text);
            menuItem.element.down('.x-button-icon').setStyle({color:color});
        }
    }
});