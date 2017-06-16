$(function(){
    $("ul").on("click", "li",function() {
        $("li.selected").removeClass("selected");
        $(this).addClass("selected");
        
        myID = this.id.split("_")[1];
        $("#tab_text_area>div").hide();
        $("#text_" + myID).show();
    })
    
    $("#tab_1").trigger("click");
})