$(".right").on("click", function(){
    var id = $(".carousel-item.active").attr("id");
    id = parseInt(id) + 1;
    noSe(id);

    return false;
});

$(".left").on("click", function(){
    var id = $(".carousel-item.active").attr("id");
    id = parseInt(id) - 1;
    noSe(id);

    return false;
});


function noSe(id){
    if($("[id=\""+id+"\"]").length){
        $(".carousel-item.active").removeClass("active");
        $("[id=\""+id+"\"]").addClass("active");
    } else {
        alert("ahora no joven")
    }
}

