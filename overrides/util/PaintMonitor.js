Ext.define('Ext.override.util.PaintMonitor', {
    override: 'Ext.util.PaintMonitor',
    requires: [
        'Ext.util.paintmonitor.CssAnimation'
    ],

    constructor: function (config) {
        return new Ext.util.paintmonitor.CssAnimation(config);
    }
});