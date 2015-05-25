/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.controller.Map', {
    extend: 'BV2014.controller.Base',
    requires: ['BV2014.view.Map'],
    config: {
        
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
        me.setCurrentView( 'maplocation', 'BRIDGES Volleyball Fields' );
    }
});