
$(document).ready(function(){

var empty="";
for (var r=0;r<25;r++){
	for (var c=0;c<25;c++){
		empty+="<a href='#' class='a' id='"+r+"-"+c+"'> </a>"
		
	}
	empty+="<br>"
}

$("#main").html(empty);

$(".a").click(function(){
	if(this.innerHTML=="#")
		this.innerHTML=" "
	else
		this.innerHTML="#";
})


$("#start").click(function(){
$("#start").html("Wait...");

var initDisplay="[";
for (var r=0;r<25;r++){
	for (var c=0;c<25;c++){
		if($("#"+r+"-"+c)[0].innerHTML=="#")
			initDisplay+="["+r+","+c+"],";
		
	}
}
initDisplay=initDisplay.substr(0,initDisplay.length-1)+"]";

var gol;
$.get("gol.php", {init: initDisplay}, function(r){
	$("#start").html("");


	gol=eval(r);
	i=0;
	setInterval(function(){
		$("#main").html(gol[i]);
		i++;
	
	},100);
})
});

});