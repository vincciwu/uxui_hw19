$( document ).ready(function() {
    console.log( "ready!" );

    $(".viewCaseButton").on("mouseenter", function() {
        console.log("click to view more");
       // let that = this;
        $(this).css({border: '0 solid #f37736'}).animate({
            borderWidth: 4
        }, 500);

        

    }) ;

    $(".viewCaseButton").on("mouseleave", function() {
        console.log("click to view less");
       // let that = this;
        $(this).css({border: '0 solid lightgray'}).animate({
            borderWidth: 4
        }, 500);

        

    })
    $(".viewCaseButton2").on("mouseenter", function() {
        console.log("click to view more");
       // let that = this;
        $(this).css({border: '0 solid #f37736'}).animate({
            borderWidth: 4
        }, 500);

        

    }) ;

    $(".viewCaseButton2").on("mouseleave", function() {
        console.log("click to view less");
       // let that = this;
        $(this).css({border: '0 solid lightgray'}).animate({
            borderWidth: 4
        }, 500);

        

    })
    $(".topnav a").mouseover(function () {
        var con = $(this).index();
        $("#slidebar").css({
            left: (136 * con + 35) + "px"
        })
    })
    $(".topnav a").mouseleave(function () {
        $("#slidebar").css({
            left: "35px"
        })
    })

});

