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
        control: {},
        before: {
            onScheduleItemDeepLink: 'checkAppStatus'
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
        console.log( 'hi')
        switch( id ) {
            case 'schedule':

                //me.setCurrentView( 'schedulelist' );
                //me.getScheduleList().up( 'navigationview' ).pop( 99 );
                break;
        }
    }
});