$(document).ready(function(){

    $("#imgBandeira").click(function(){
      if($(this).attr("src") == "sol.png") 
        $(this).attr("src","https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg");
      else
        $(this).attr("src","https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg");
  
    });
  });
  