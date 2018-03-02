$(document).ready(function(){
    $(".search-icon").on("click",function(){
        $(".search-icon").addClass("hide");
        $(".search-box").removeClass("hide");
    });

    $(".cross").on("click",function(){
        $(".search-box").addClass("hide");
        $(".search-icon").removeClass("hide");
        $("#wiki-search").val('');
    });

    $("#wiki-search").keypress(function(event){

        if(event.which == 13){
            query_item = $("#wiki-search").val();
            if(query_item == ''){
                alert("Please enter a query");
            }
            else{
                $.ajax({
                    url:"https://en.wikipedia.org/w/api.php?",
                    data:{
                        action:"query",
                        titles:query_item,
                        format:"json",
                        prop:"revision",
                        rvprop:"content",
                        formatversion:"2",
                        origin:"https://www.mediawiki.org"
                    },
                    success:function(response){
                        console.log(response);
                    }
                });
            }
        }
      
    });
}); 