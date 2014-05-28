/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.controller.Schedules', {
    extend: 'BV2014.controller.Base',
    config: {
        stores: [
            'Matches'
        ],
        views: [
            'Schedule'
        ],
        refs: {
            ScheduleList: 'schedulelist'
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
        me.setCurrentView( 'schedulelist', 'Match Schedule' );
    }
});