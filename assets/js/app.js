$(".right").on("click", function(){
    var id = $(".active").attr("id");
    id = parseInt(id) + 1;
    next(id);

    return false;
});

$(".left").on("click", function(){
    var id = $(".active").attr("id");
    id = parseInt(id) - 1;
    next(id);

    return false;
});


function next(id){
    if($("[id=\""+id+"\"]").length){
        $(".carousel-item.active").removeClass("active");
        $("[id=\""+id+"\"]").addClass("active");
    } else {
        alert("ahora no joven");
    }
}

