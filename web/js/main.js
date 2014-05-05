var delay=2;
var d=100;
var z;
var gen=0;
	
$(document).ready(function(){

	z = Array.apply(null, new Array(d)).map(Number.prototype.valueOf,0);
	for (var i = 0; i < d; i++) 
		z[i] = Array.apply(null, new Array(d)).map(Number.prototype.valueOf,0);

	
	$("#gol").click(function(e){
		var x = Math.floor(e.offsetX/5);
		var y = Math.floor(e.offsetY/5);
		
		switch(pattern.selectedIndex){
			case 0:
				if (z[y][x]==1)
					off(x,y);
				else
					on(x,y);
				
			break; case 1:
				//glider
				showPattern([[0,2],[1,0],[1,2],[2,1],[2,2]]);

			break; case 2:
				//pulsar
				showPattern([[0,0],[2,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[2,4],[4,4]]);

			break; case 3:
				//spaceship
				showPattern([[1,0],[4,0],[0,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3]]);

			break; case 4:
				//glider gun
				showPattern([[25,0],[22,1],[23,1],[24,1],[25,1],[30,1],
					[13,2],[21,2],[22,2],[23,2],[24,2],[30,2],[12,3],[14,3],[21,3],[24,3],[34,3],[35,3],
					[11,4],[15,4],[16,4],[21,4],[22,4],[23,4],[24,4],[34,4],[35,4],
					[0,5],[1,5],[11,5],[15,5],[16,5],[22,5],[23,5],[24,5],[25,5],[0,6],
					[1,6],[11,6],[15,6],[16,6],[25,6],[12,7],[14,7],[13,8]]);
			
			break; case 5:
				//Bar
				showPattern([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]);
			
			break; case 6:
				//R-pentomino 
				showPattern([[0,1],[1,0],[1,1],[1,2],[2,0]]);

			break; case 7:
				//Airplane
				showPattern([[0,0],[0,1],[0,2],[1,0],[1,10],[1,11],[2,1],[2,8],[2,9],[2,10],
					[2,12],[3,3],[3,4],[3,7],[3,8],[4,4],[5,8],[6,4],[6,5],[6,9],[7,3],[7,5],
					[7,7],[7,8],[8,3],[8,5],[8,8],[8,10],[8,11],[9,2],[9,7],[9,8],[10,2],[10,3],[11,2],[11,3]]);

			break; case 8:
				//Beehive
				showPattern([[0,0],[0,6],[1,0],[1,6],[2,1],[2,5],[3,2],[3,3],[3,4]]);

			break; case 9:
				//Tumbler
				showPattern([[0,1],[0,2],[1,0],[2,1],[2,3],[2,4],[3,2],[3,4],[5,2],
					[5,4],[6,1],[6,3],[6,4],[7,0],[8,1],[8,2]]);

			break; case 10:
				//Octagon 
				showPattern([[0,6],[0,7],[1,5],[1,8],[2,4],[2,9],[3,3],[3,10],[4,3],
					[4,10],[5,4],[5,9],[6,5],[6,8],[7,6],[7,7]]);

			break; case 11:
				//Pinwheel 
				showPattern([[0,4],[0,5],[1,4],[1,5],[3,4],[3,5],[3,6],[3,7],[4,3],[4,8],
					[4,10],[4,11],[5,3],[5,7],[5,8],[5,10],[5,11],[6,0],[6,1],[6,3],[6,5],
					[6,8],[7,0],[7,1],[7,3],[7,6],[7,8],[8,4],[8,5],[8,6],[8,7],[10,6],[10,7],[11,6],[11,7]]);



		}

		function showPattern(pattern){
			for (var i=0; i<pattern.length; i++)
				on(pattern[i][0]+x, pattern[i][1]+y);
		}
		
	})

	$("#backward").click(function(){
		delay++;
	});

	$("#forward").click(function(){
		if (delay!=0)
			delay--;
	});
	
	$("#clear").click(function(){
		z = Array.apply(null, new Array(d)).map(Number.prototype.valueOf,0);
		for (var i = 0; i < d; i++) 
			z[i] = Array.apply(null, new Array(d)).map(Number.prototype.valueOf,0);

		var g=document.getElementById("gol")
		g.width = g.width;

	});


	$("#play").click(function(){
		if ($("#play").attr("class")=="glyphicon glyphicon-play"){
			$("#play").attr("class", "glyphicon glyphicon-pause");
			runGOL();

		} else{
			$("#play").attr("class", "glyphicon glyphicon-play");	

		}

	});

	$("#gol").on("mousemove",function(e){
		var x = Math.floor(e.offsetX/5);
		var y = Math.floor(e.offsetY/5);

		$("#location").html(x+","+y);

	});


});




function get(x,y){
	var g=document.getElementById("gol").getContext("2d");
	var color = g.getImageData(x*5, y*5, 1, 1).data[3];
	return (color==255);

}

function on(x,y){
	if (x>99||y>99)
		return;
	z[y][x]=1;
	var g=document.getElementById("gol").getContext("2d");
	g.fillStyle = "black";
	g.fillRect(x*5,y*5,5,5);
}

function off(x,y){
	if (x>99||y>99)
		return;
	z[y][x]=0;
	var g=document.getElementById("gol").getContext("2d");
	g.fillStyle = "white";
	g.fillRect(x*5,y*5,5,5);
}


function runGOL(){

	var w = z.slice(0);

	var onList=[];
	var offList=[];

	for(var x=0;x<w.length;x++){
		for(var y=0;y<w[x].length;y++){
			//if (x>0 && x<d-1 && w[x-1].indexOf(1)==-1 && w[x].indexOf(1)==-1 && w[x+1].indexOf(1)==-1)
			//	break;

			var n=0;
			if (x>0){
				if (y>0)
					n+=w[y-1][x-1];

				n+=w[y][x-1];
				if (y<d-1)
					n+=w[y+1][x-1];
			}
			if (y>0)
				n+=w[y-1][x];
			if (y<d-1)
				n+=w[y+1][x];
			if (x<d-1){
				if (y>0)
					n+=w[y-1][x+1];
				n+=w[y][x+1];
				if (y<d-1)
					n+=w[y+1][x+1];
			}	
			
			//rules
			if (w[y][x]==0 && n==3)
				onList.push([x,y]);

			if(w[y][x]==1 && (n<2 || n>3))	
				offList.push([x,y]);
		}
	}

	for (var i in onList)
		on(onList[i][0], onList[i][1]);
	for (var i in offList)
		off(offList[i][0], offList[i][1]);

	if ($("#play").attr("class")=="glyphicon glyphicon-pause"){
		gen++;
		$("#gen").html(gen.toString());

		setTimeout(runGOL, Math.max(1,delay*20));
	}

}
