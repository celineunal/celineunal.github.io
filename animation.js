/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function(){
    $.when(
        $(".fullpage, #topgr, #links, #bottombar").css("display", "flex").promise()
    ).done(function() {
        $.when(
            $("body").find("*").hide().promise(),
            $("body").hide().promise()
        ).done(function(){
            $("body").show(0, function(){
                $.when(
                    $(".fullpage").show().promise()
                ).done(function(){
                    $("#topgr").show(0, function(){
                        $("#links").fadeTo(1000, 0)
                        $("#bottombar").fadeTo(1000, 0);
                        $("#header").fadeIn(2000);
                        $("#subheader").fadeTo(2000, 0, function(){
                            $("#subheader").fadeTo(1000, 1, function() {
                                $("#topgr").animate({ 'padding' : '0%' }, "slow", function(){
                                    $("#links").fadeTo(0, 1, function(){
                                        var i;
                                        for (i = 0; i < $("#links").children().length; i++){
                                            if ( (i + 1) === $("#links").children().length ) {
                                                $("#links").children().eq(i).fadeIn(1000, function(){
                                                    $("#bottombar").fadeTo(0, 1, function(){
                                                        $("#bottombar").children().each( function(i){
                                                            $(this).fadeTo(200*i, 0, function(){
                                                                $(this).fadeTo(200*i, 1);
                                                            });
                                                        });
                                                    });
                                                });
                                            } else {
                                                $("#links").children().eq(i).fadeIn(1000);
                                            }
                                        }
                                    });
                                });
                            });
                        });   
                    });
                });
            });
        });
    });
});

