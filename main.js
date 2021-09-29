/*$(document).ready(function(){*/ //Esto hace lo mismo que la linea de abajo
$(document).ready(function(){

    $("h1").show();

    //$(".primero").css({"background-color": "red"});  -- clases
    //$("#segundo").css({"background-color": "red"});  -- id
    
    /*$("#btn-hide").dblclick(function(){
        //alert("Hola");
        $("#segundo").hide();
    });

    $("#btn-show").click(function(){
        //alert("Hola");
        $("#segundo").show();
    });*/
    /*
    $(".primero").animate({width: "300px"});

    $(".primero").mouseenter(function(){
        //alert("Hola");
        //$("#segundo").hide();
        //$("#segundo").fadeOut();
        $("#segundo").slideDown();
    });

    $(".primero").mouseleave(function(){
        //alert("Hola");
        //$("#segundo").show();
        //$("#segundo").fadeIn();
        $("#segundo").slideUp();
    });*/

    $("#btn-hide").click(function(){
        alert($("#segundo").text());
        
    });


    $("#caja").click(function(){

        $("#caja").css({"background-color": "red",
                         "width": "400px",
                         "height": "100px"});

    });


});
