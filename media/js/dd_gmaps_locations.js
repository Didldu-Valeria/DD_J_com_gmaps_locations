/**
 * @version    1-1-0-0 // Y-m-d 2017-02-25
 * @author     HR IT-Solutions Florian Häusler https://www.hr-it-solutions.com
 * @copyright  Copyright (C) 2011 - 2017 Didldu e.K. | HR IT-Solutions
 * @license    http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 **/

function processAjax(val, attrVal){

    var loadmorebutton = jQuery('#load-more');

    loadmorebutton.animate({
        width: "100%"
    }, 1500 );

    jQuery.ajax({
        crossDomain: false,
        type: "POST",
        url: 'index.php?option=com_dd_gmaps_locations&task=getAjax&format=json',
        data:  {data:{start:start,limit:limit,geolocate:geolocate,locationLatLng:locationLatLng,fulltext_search:fulltext_search,category_filter:category_filter,activeAlias:activeAlias}},
        dataType: "json",
        cache: false
    })

        .done(function(data, textStatus, jqXHR){

            start += limit;
            jQuery("#InserBefore").before(data.html);

            init_default_itemsJS();

            loadmorebutton.stop();
            loadmorebutton.css("width", "auto");

        })
        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("Ajax problem: " + textStatus + ". " + errorThrown);
        });
}