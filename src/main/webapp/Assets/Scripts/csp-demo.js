


    $(document).ready(function() {
    
        $("#profiles").click(function() {
            $("span").html($("#name").val());
            

                $("input:first").val();
                localStorage["name"] = $("input:first").val();
                event.preventDefault();
                return true;
        

            
        });

    $('#profilePic').on({
        'click': function(){
           $("#profilePic").attr("src","https://lh4.googleusercontent.com/-f7Enxliyigc/TiMPtJ0zsSI/AAAAAAAABEo/Cra5KP-oy0I/w462-h460-no/Thorrud%2B%C3%85shild%2BKaldal.JPG");
        }
    });

});
