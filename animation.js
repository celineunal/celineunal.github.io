/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function(){
    $.when( $("content").css("display", "flex").promise() ).done(function() {
        $.when (
            $("#content").children().each(
                function(i, element){
                    $(element).fadeTo(700 + i*400, 1);
            }).promise()
        ).done(function(){
            $("#footnotetxt").fadeTo(200, 1);
        });
    });
});

