/**
 * @docauthor Joel Watson <existdissolve@gmail.com>
 */
Ext.define('BV2014.view.Map', {
    extend: 'Ext.Map',
    alias: 'widget.maplocation',
    config: {
        layout: 'card',
        title: 'My Team Schedule',
        mapOptions : {
            center : new google.maps.LatLng(38.8120857, -94.7982176),  
            zoom : 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
            }
        },
        listeners: {
            show: function( panel, opts ) {
                panel.up( 'mainnav' ).down( 'titlebar' ).add({
                    xtype: 'button',
                    align: 'right',
                    itemId: 'openmap',
                    iconCls: 'maps',
                    handler: function() {
                        if(Ext.os.is.Android) {
                            window.open("geo:38.8120857,-94.7982176?z=17");
                        }
                        else {
                            window.open("comgooglemaps://?center=38.8120857,-94.7982176&zoom=17");
                        }
                    }
                });
            },
            destroy: function( opts ) {
                Ext.ComponentQuery.query( 'button#openmap' )[ 0 ].destroy();
            }
        }
    },
    initialize: function() {
        new google.maps.Marker({
            map: this.getMap(),
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng (38.8120857, -94.7982176),
            icon: 'resources/images/logomap.png'
        });
    }
});