$(document).ready(function(){
    $(".search-icon").on("click",function(){
        $(".search-icon").addClass("hide");
        $(".search-box").removeClass("hide");
    });

    $(".cross").on("click",function(){
        $(".search-box").addClass("hide");
        $(".search-icon").removeClass("hide");
        $("#wiki-search").val('');
        $('.Results').html('');
        $(".search-area").css("margin-top","20%");
    });

    $("#wiki-search").keypress(function(event){

        query_item = '';

        if(event.which == 13){
            query_item = $("#wiki-search").val();
            $(".Results").html('');
            if(query_item == ''){
                alert("Please enter a query");
            }
            else{
                $.ajax({
                    url:"https://en.wikipedia.org/w/api.php?",
                    data:{
                        action:"query",
                        format:"json",
                        prop:"pageimages|extracts",
                        generator:"search",
                        exsentences:1,
                        exintro:1,
                        gsrsearch:query_item,
                        gsrnamespace:0,
                        gsrlimit:10,
                        exlimit:"max",
                        origin:"*",
                    },
                    success:function(response){

                        if(response["query"]==undefined){
                            alert("No Wikipedia Article found for the given query.");
                            $("#wiki-search").val('');
                        }
                        else{
                            
                                console.log(response);
                                keys= Object.keys(response["query"]["pages"]);
                                for(var i=0;i<keys.length;i++){

                                    id=keys[i];
                                    title = response["query"]["pages"][id]["title"];
                                    text = response["query"]["pages"][id]["extract"];
                                    url = "https://en.wikipedia.org/?curid="+ response["query"]["pages"][id]["pageid"];
                                    
                                    $(".search-area").css("margin-top","0%");
                                    $(".Results").append("<a href="+url+" target=_blank><div class='card result-card bg-light text-dark'><div class='card-header'>"+title+"</div><div class='card-body'>"+text+"</div></div></a>");
                        }
                    }
                    }
                });
            }
        }
      
    });
}); 