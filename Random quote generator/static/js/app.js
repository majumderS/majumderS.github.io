
$(document).ready(function(){

    $(".new_quote_btn").on("click",function(){
        $.ajax({
            url:"https://api.forismatic.com/api/1.0/?",
            dataType:"jsonp",
            data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
            success:function(response){
                console.log(response);
                if(response.quoteAuthor == ""){
                    $(".quoteText").html(response.quoteText);
                    $(".quoteAuthor").html('-'+'Anonymous');
                }
                else{
                    $(".quoteText").html(response.quoteText);
                    $(".quoteAuthor").html('-'+response.quoteAuthor);
                }
                
            }
        });
    });


});
