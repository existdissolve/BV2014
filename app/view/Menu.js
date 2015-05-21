/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.Menu',{
    extend: 'Ext.Container',
    xtype: 'mainmenu',
    config: {
        cls: 'mainmenu',
        docked: 'left',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
        width: 260,
        scrollable: true,
        padding: '184px 0 0 0',
        open: false,
        defaultType: 'button',
        defaults: {
            textAlign: 'left'
        },
        items: [
            {
                text: 'Schedule',
                ui: 'mainmenu',
                itemId: 'schedule',
                iconCls: 'calendar'
            },
            {
                text: 'Teams',
                ui: 'mainmenu',
                itemId: 'teams',
                iconCls: 'team'
            },
            {
                text: 'Standings',
                ui: 'mainmenu',
                itemId: 'standings',
                iconCls: 'trophy'
            },
            {
                text: 'My Team',
                ui: 'mainmenu',
                itemId: 'myteam',
                iconCls: 'user'
            },
            {
                text: 'View Website',
                ui: 'mainmenu',
                itemId: 'website',
                iconCls: 'browser',
                handler: function() {
                    window.open( 'http://www.bridgeskc.com/Default.aspx?tabid=528015' );
                }
            }
        ]
    },
    /**
     * Sets parent for menu
     * @param {Mixed} parent
     */
    setParent: function( parent ) {
        this.callParent(arguments);
        this.maskCmp = parent.add({
            xtype   : 'component',
            cls     : 'mainmenu-mask',
            top     : 0,
            zIndex  : 5000,
            hidden  : true,
            width   : 9999,
            left    : this.getWidth(),
            bottom  : 0
        });
        
        this.maskCmp.element.on({
            scope   : this,
            touchend: 'onMaskRelease'
        });
    },
    /**
     * Toggles menu state
     */
    toggle: function() {
        this.setOpen(!this.getOpen());
    },
    /**
     * Updates open state of menu
     * @param {Boolen} open
     */
    updateOpen: function( open ) {
        var targetEl,
            parentCt = this.up();
        
        if ( !parentCt ) {
            return;
        }
        
        targetEl = parentCt.innerElement;
        
        if ( open ) {
            targetEl.translate( this.getWidth(), 0, 0 );
            this.maskCmp.show();
        }
        else {
            targetEl.translate( 0, 0, 0 );
            this.maskCmp.hide();
        }
    },
    /**
     * Handler for mask release event
     * @private
     */
    onMaskRelease: function() {
        this.setOpen( false );
    },
    /**
     * Handler for destroy event
     * @private
     */
    onDestroy: function() {
        this.maskCmp.destroy();
        delete this.maskCmp;
        
        this.callParent( arguments );
    }
});