


    $(document).ready(function() {
    $("#csp-submit").submit(function(event)
        {

            $("input:first").val();
            localStorage["name"] = $("input:first").val();
            event.preventDefault();
            return true;
        });
        $("#profiles").click(function() {
                    $("span").html(localStorage["name"]).val();
        });
    });
