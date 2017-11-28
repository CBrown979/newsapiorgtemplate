/*global $ APIKEY*/

$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category: "business", country: "us", language: "en", apiKey: "27dba2b2690d4914856961f7d895c081" },
        success: function(data){
            if(data.status == "ok"){
                console.log(data);
                for(var i=0; i<data.sources.length; i++){
                    var source=document.createElement("OPTION");
                    source.innerHTML=data.sources[i].name;//attributes needed to display
                    document.getElementById('selection').appendChild(source);
                }
            }
        }
     })
    //  .done(function(data) {
    //      console.log( data );
    //      console.log(data.status);
    //     //alert( "Data Saved: " + msg );
    //  });
    $('#source').submit(function(event){
        event.preventDefault();
        alert(document.getElementById("selection").value)
    })
})