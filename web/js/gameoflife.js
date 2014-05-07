//Copyright (c) 2014 Alex Gulakov, MIT License http://mit-license.org 

var z, dY, dX, delay=2, gen=0, multiplayer=false, patterns = [], survive = [2, 3], born = [3];
	
$(document).ready(function(){
	dX=Math.floor($(window).width()/5);
	dY=Math.floor(($(window).height()-$("#info-container").height()-5)/5);

	z = Array.apply(null, new Array(dY)).map(Number.prototype.valueOf,0);
	for (var i = 0; i < dY; i++) 
		z[i] = Array.apply(null, new Array(dX)).map(Number.prototype.valueOf,0);

	var g=document.getElementById("gol");
	g.width=dX*5;
	g.height=dY*5;
		

	patterns.push({name:"Point On/Off"});
	patterns.push({name:"Glider", array: [[0,2],[1,0],[1,2],[2,1],[2,2]]});
	patterns.push({name:"Spaceship", array: [[1,0],[4,0],[0,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3]]});
	patterns.push({name:"Pulsar", array:  [[0,0],[2,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[2,4],[4,4]]});
	patterns.push({name:"Glider Gun", array: [[25,0],[22,1],[23,1],[24,1],[25,1],[30,1],
					[13,2],[21,2],[22,2],[23,2],[24,2],[30,2],[12,3],[14,3],[21,3],[24,3],[34,3],[35,3],
					[11,4],[15,4],[16,4],[21,4],[22,4],[23,4],[24,4],[34,4],[35,4],
					[0,5],[1,5],[11,5],[15,5],[16,5],[22,5],[23,5],[24,5],[25,5],[0,6],
					[1,6],[11,6],[15,6],[16,6],[25,6],[12,7],[14,7],[13,8]]});
	patterns.push({name:"Goose", array: [[0,0],[0,1],[0,2],[1,0],[1,10],[1,11],[2,1],[2,8],[2,9],[2,10],
					[2,12],[3,3],[3,4],[3,7],[3,8],[4,4],[5,8],[6,4],[6,5],[6,9],[7,3],[7,5],
					[7,7],[7,8],[8,3],[8,5],[8,8],[8,10],[8,11],[9,2],[9,7],[9,8],[10,2],[10,3],[11,2],[11,3]]});
	patterns.push({name:"Bar", array: [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]});
	patterns.push({name:"R-pentomino", array: [[0,1],[1,0],[1,1],[1,2],[2,0]]});
	patterns.push({name:"Beehive", array: [[0,0],[0,6],[1,0],[1,6],[2,1],[2,5],[3,2],[3,3],[3,4]]});
	patterns.push({name:"Tumbler", array: [[0,1],[0,2],[1,0],[2,1],[2,3],[2,4],[3,2],[3,4],[5,2],
					[5,4],[6,1],[6,3],[6,4],[7,0],[8,1],[8,2]]});
	patterns.push({name:"Octagon", array: [[0,6],[0,7],[1,5],[1,8],[2,4],[2,9],[3,3],[3,10],[4,3],
					[4,10],[5,4],[5,9],[6,5],[6,8],[7,6],[7,7]]});
	patterns.push({name:"Pinwheel", array: [[0,4],[0,5],[1,4],[1,5],[3,4],[3,5],[3,6],[3,7],[4,3],[4,8],
					[4,10],[4,11],[5,3],[5,7],[5,8],[5,10],[5,11],[6,0],[6,1],[6,3],[6,5],
					[6,8],[7,0],[7,1],[7,3],[7,6],[7,8],[8,4],[8,5],[8,6],[8,7],[10,6],[10,7],[11,6],[11,7]]});
	patterns.push({name:"Unix", array: [[0,4],[0,5],[1,0],[1,1],[1,3],[2,0],[2,1],[2,4],[2,7],[3,5],[3,7],
		[4,6],[6,5],[6,6],[7,5],[7,6]]});

	patterns.push({name:"Ship on quadpole", array: [[1,0],[1,1],[2,0],[2,2],[3,1],[3,2],[4,3],[4,4],[5,3],
		[6,4],[6,6],[8,6],[8,8],[9,9],[10,8],[10,9],]});


	
	for (var i in patterns)
		$("#pattern").append($('<option>'+patterns[i].name+'</option>'));
	
	$("#pattern").append($('<a href="http://conwaylife.com/w/index.php?title=Special:PopularPages&amp;limit=100&amp;offset=0">More Patterns</a>'));

	$("#pattern").click(function(){

		if($("#pattern")[0].selectedIndex==$("#pattern").children().length-1)
			window.open("http://conwaylife.com/w/index.php?title=Special:PopularPages&amp;limit=100&amp;offset=0");

	});

	$("#settings").hide();
	$("#settings-button").click(function(){

		if ($("#settings").css('display') == 'none'){

			$("#settings").show();
			$("#settings-survive label").each(function(){
				if(survive.indexOf(parseInt(this.textContent))!=-1)
					$(this).attr("class", "btn btn-default active")
			})
			$("#settings-born label").each(function(){
				if(born.indexOf(parseInt(this.textContent))!=-1)
					$(this).attr("class", "btn btn-default active")
			})


		} else {

			$("#settings").hide();

		}
	});
		
	function resetBS(){

		survive=[];
		born=[];
		$("#settings-survive label").each(function(){
			if(this.className.match("active")!=null)
				survive.push(parseInt(this.textContent));
		});

		$("#settings-born label").each(function(){
			if(this.className.match("active")!=null)
				born.push(parseInt(this.textContent));
		});

	}

	$("#settings-born input").each(function(){
		$(this).on("mouseup", function(){
			if(this.parentNode.className=="btn btn-primary")
				this.parentNode.className="btn btn-default";
			else
				this.parentNode.className="btn btn-primary";
		});
	})
	$("#settings-survive input").each(function(){
		$(this).on("mouseup", function(){
			if(this.parentNode.className=="btn btn-primary")
				this.parentNode.className="btn btn-default";
			else
				this.parentNode.className="btn btn-primary";
		});

	})

	$("#settings-born").on("mouseup", function(){
		resetBS();
	});
	$("#settings-survive").on("mouseup", function(){
		resetBS();
	});
	

	$("#gol").click(function(e){
		var x = Math.floor(e.offsetX/5);
		var y = Math.floor(e.offsetY/5);
		
		if($("#pattern")[0].selectedIndex==0){
			if (z[y][x]==1)
				off(x,y);
			else
				on(x,y);
		} else {
			var pattern = patterns[$("#pattern")[0].selectedIndex].array;
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
		z = Array.apply(null, new Array(dY)).map(Number.prototype.valueOf,0);
		for (var i = 0; i < dY; i++) 
			z[i] = Array.apply(null, new Array(dX)).map(Number.prototype.valueOf,0);

		var g=document.getElementById("gol")
		g.width = g.width;

		gen=0;

	});


	$("#play").click(function(){
		if ($("#play").children().attr("class")=="glyphicon glyphicon-play"){
			$("#play").children().attr("class", "glyphicon glyphicon-pause");
			runGOL();

		} else{
			$("#play").children().attr("class", "glyphicon glyphicon-play");	

		}

	});

	$("#multiplayer").click(function(){
		$("#clear").click();
		multiplayer=!multiplayer;

		if(multiplayer){

			$("#multiplayer").attr("class", "btn btn-primary");

			$.post("/html/game/ajax.php", {type: "read"}, function(data){
				z = eval(data).slice(0);

				for(var y=0;y<dY;y++)
					for(var x=0;x<dX;x++)
						if(z[y][x]==1)
							on(x,y);

			});
		} else {

			$("#multiplayer").attr("class", "btn btn-default");

		}

	});

	$("#controls button").tooltip();

	$("#gol").on("mousemove",function(e){
		var x = Math.floor(e.offsetX/5);
		var y = Math.floor(e.offsetY/5);

		$("#location").html(x+","+y);

	});

	//multiplayer upate
	setInterval(function(){
		if (multiplayer)
			$.post("/html/game/ajax.php", {type: "update", data: JSON.stringify(z)});
	}, 5000)


});




function get(x,y){
	var g=document.getElementById("gol").getContext("2d");
	var color = g.getImageData(x*5, y*5, 1, 1).data[3];
	return (color==255);

}

function on(x,y){
	if (x>dX||y>dY)
		return;
	z[y][x]=1;
	var g=document.getElementById("gol").getContext("2d");
	g.fillStyle = "black";
	g.fillRect(x*5,y*5,5,5);
}

function off(x,y){
	if (x>dX||y>dY)
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

	for(var y=0;y<dY;y++){
		for(var x=0;x<dX;x++){
			if (y>0 && y<dY-1 && w[y-1].indexOf(1)==-1 && w[y].indexOf(1)==-1 && w[y+1].indexOf(1)==-1)				break;

			var n=0;
			if (x>0){
				if (y>0)
					n+=w[y-1][x-1];

				n+=w[y][x-1];
				if (y<dY-1)
					n+=w[y+1][x-1];
			}
			if (y>0)
				n+=w[y-1][x];
			if (y<dY-1)
				n+=w[y+1][x];
			if (x<dX-1){
				if (y>0)
					n+=w[y-1][x+1];
				n+=w[y][x+1];
				if (y<dY-1)
					n+=w[y+1][x+1];
			}	
			
			//rules
			if (w[y][x]==0 && born.indexOf(n)!=-1)
				onList.push([x,y]);

			if(w[y][x]==1 && born.indexOf(n)==-1 && survive.indexOf(n)==-1)	
				offList.push([x,y]);
		}
	}

	for (var i in onList)
		on(onList[i][0], onList[i][1]);
	for (var i in offList)
		off(offList[i][0], offList[i][1]);

	
	if ($("#play").children().attr("class")=="glyphicon glyphicon-pause"){
		gen++;
		$("#gen").html(gen.toString());

		setTimeout(runGOL, Math.max(1,delay*20));
	}

}
