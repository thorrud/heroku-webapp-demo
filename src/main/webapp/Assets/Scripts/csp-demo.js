


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
           $("#profilePic").attr("src","http://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Rockhopper-Penguin-photo.jpg");
        }
    });

});
