$(document).ready(function(){

    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?",
        data:"q=Bengaluru&appid=ec22a895f7d6ee1106ab6ef59b6691dc&units=metric",
        success:function(response){

            //data needed to be displayed during rendering from weather API.
            place = response.name;
            temp = response.main["temp"];
            humidity = response.main["humidity"];
            temp_max = response.main["temp_max"];
            temp_min = response.main["temp_min"];
            weather_desc = response.weather[0]["main"];
            weather_desc_id = response.weather[0]["id"];
            icon = response.weather[0]["icon"];
            //end

            url_for_icon = "http://openweathermap.org/img/w/"+icon+".png";
            console.log(response,temp,weather_desc,place,weather_desc_id,humidity,temp_max,temp_min);

        
           if(weather_desc_id>=200 && weather_desc_id<=232){
               //thunderstorm
               background_image = "sunny.jpg";
               change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
           }
           else if(weather_desc_id>=300 && weather_desc_id<=321){
               //drizzle
               background_image = "sunny.jpg";
               change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
           }
           else if(weather_desc_id>=500 && weather_desc_id<=531){
               //rain
               background_image = "rainy.jpg";
               change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
           }
           else if(weather_desc_id>=600 && weather_desc_id<=622){
               //snow
               background_image = "snowing.jpg";
               change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
           }
           else if(weather_desc_id>=701 && weather_desc_id<=781){
               //atmosphere
               background_image = "sunny.jpg";
               change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
           }
           else if(weather_desc_id==800){
               //clear
               background_image = "sunny.jpg";
               change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
           }
           else if(weather_desc_id>=801 && weather_desc_id<=804){
                //cloud
                background_image = "cloudy.jpg";
                change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
            }
           else if(weather_desc_id>=900 && weather_desc_id<=906){
                //extreme
                background_image = "sunny.jpg";
                change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
            }
           else{
               //additional
               background_image = "sunny.jpg";
               change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min);
           }

        }
    });

    function change_css(url_for_icon,background_image,place,temp,weather_desc,humidity,temp_max,temp_min){
        
        background_image = "static/images/"+background_image;

        $("body").css("background",'url("'+background_image+'")');
        $("body").css("background-size","cover");
        $("body").css("background-attachment","fixed");
        $("body").css("background-repeat","no-repeat");
        $("body").css("background-position","center)");

        $("#weather-icon").css("background","url("+url_for_icon+")");
        $("#place").html(place);
        $("#temp").html(temp);
        $("#humidity").html(humidity);
        $("#min_temp").html(temp_min);
        $("#max_temp").html(temp_max);
    }
});