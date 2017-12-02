/*global $ APIKEY*/

$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category: "technology", country: "us", language: "en", apiKey: APIKEY },
        success: function(data){
            if(data.status == "ok"){
                console.log("start");
                console.log(data);
                for(var i=0; i<data.sources.length; i++){
                    var source=document.createElement("OPTION");
                    source.setAttribute("value", data.sources[i].id);
                    source.innerHTML=data.sources[i].name;//attributes needed to display
                    document.getElementById('selection').appendChild(source);
                }
                console.log("stop");
            }
        }
    });
});
    document.getElementById("getHeadlines").onclick = function(event){
	  event.preventDefault();
	  document.getElementById("headlines").innerHTML="";
        var articleHeads=document.getElementById("selection").value;
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: {country: "us", language: "en", sources: articleHeads, apiKey: APIKEY},
            success: function(data){
                if(data.status == "ok"){
                    console.log("begin");
                    //document.getElementById("quoteInfo").reset();
                    console.log(data.articles[0].title);
                    for(var i=0; i<data.articles.length; i++){
                        var newHeadline=document.createElement("li");
                        //document.getElementById("headlines").reset();
                        newHeadline.innerHTML=data.articles[i].title;
                        document.getElementById('headlines').appendChild(newHeadline);
                        
                    }
                    console.log("finish");
                }
            }
        });
    };
    