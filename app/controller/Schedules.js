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
        control: {
            'schedulelist': {
                show: 'scrollToCurrentGame'
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
        me.setCurrentView( 'schedulelist', 'Match Schedule' );
    },
    scrollToCurrentGame: function( list, eOpts ) {
        var me = this,
            store = list.getStore(),
            currentGame = store.findBy(function( record, id ) {
                if( record.get( 'date' ) >= Ext.Date.format( new Date(), 'Y-m-d' ) ) {
                    return true;
                }
            });
        //console.log( list.getItemMap() )
        //list.getScrollable().getScroller().scrollTo( 0, ( currentGame * 100 ) + 24, true )
    }
});