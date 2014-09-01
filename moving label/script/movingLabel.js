/**
 * Created by nemo on 2014/9/1 0001.
 */

//break down the labels into single character span
    $(".ml label").each(function(){
        var sop = "<span class='ch'>";
        var scl = "</span>";
        $(this).html(sop + $(this).html().split("").join(scl+sop)+scl);
    })


// upward animation
    var d = 50;
    $(".ml input").focus(function(){
        var move = $(this).outerHeight()/2-1+"px";
        //alert(move);
        $(this).next("label").addClass("focused").children("span").each(function (i) {
            $(this).addClass("ch");
            var t = d*i;
            $(this).delay(t).animate({bottom: move},100,"swing");
        })
    })


//downward aimation
    $(".ml input").focusout(function(){


        if($(this).val() == ""){  //get form value
            $(this).next("label").children("span").each(function(i){
                var t = d*i;
                $(this).delay(t).animate({bottom:0},100,"swing");
            })

        }


    })
