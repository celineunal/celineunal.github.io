/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function(){
    $.when( $("content").css("display", "flex").promise() ).done(function() {
        $.when (
            $("#content").children().each(
                function(i, element){
                    $(element).fadeTo(1000 + i*500, 1);
            }).promise()
        ).done(function(){
            $("#footnotetxt").fadeTo(400, 1);
        });
    });
});

