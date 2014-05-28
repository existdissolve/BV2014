/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.controller.Standings', {
    extend: 'BV2014.controller.Base',
    config: {
        stores: [
            'Standings'
        ],
        views: [
            'Standings'
        ],
        refs: {
            ScheduleList: 'standinglist'
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
        me.setCurrentView( 'standinglist', 'Standings' );
    }
});