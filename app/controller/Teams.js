/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.controller.Teams', {
    extend: 'BV2014.controller.Base',
    config: {
        stores: [
            'Teams'
        ],
        views: [
            'Teams'
        ],
        refs: {
            TeamList: 'teamlist'
        },
        control: {}
    },
    /**
     * Handles base route event
     * @private
     * @param {Ext.app.Controller} controller
     * @param {Number} id
     */
    onBaseRoute: function( controller, id ) {
        var me = this;
        me.setCurrentView( 'teamlist', 'Teams' );
    }
});