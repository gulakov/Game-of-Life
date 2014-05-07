<!-- Copyright (c) 2014 Alex Gulakov, MIT License http://mit-license.org -->
<!DOCTYPE html>
<html>
<head>
	<title>Game of Life</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<script src="/lib/jquery.js"></script>
	<link href="/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<script src="/lib/bootstrap/js/bootstrap.min.js"></script>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-45764194-2', 'hkrnews.com');
		ga('send', 'pageview');
	</script>

	<link href="/css/gameoflife.css" rel="stylesheet">
	<script src="/js/gameoflife.js" type="text/javascript" ></script>
</head>
<body>
<div id="info-container" class="well well-sm">
		<div id="controls" class="btn-group btn-group-xs">
			<button id="play" type="button" class="btn btn-default"><span class="glyphicon glyphicon-play" ><span id="gen">0</span></span> </button>
			<button id="backward" type="button" class="btn btn-default"><span class="glyphicon glyphicon-backward"></span></button>
			<button id="forward"  type="button" class="btn btn-default"><span class="glyphicon glyphicon-forward"></span></button>
			<button id="clear" data-toggle="tooltip" data-placement="bottom"  data-original-title="Clear" type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove"></span></button>
			<button id="multiplayer" data-toggle="tooltip" data-placement="bottom"  data-original-title="All visitors edit the same canvas" type="button" class="btn btn-default" data-toggle="button"><span class="glyphicon glyphicon-user"></span></button>
			
			<button id="settings-button"  type="button" class="btn btn-default" data-toggle="modal" data-target="#settings-modal"
><span class="glyphicon glyphicon-wrench"></span></button>
			
			
			<div id="settings">
				<span class="label label-default">Born</span>
				<div id="settings-born" class="btn-group btn-group-xs" data-toggle="buttons">
				<label class="btn btn-default"><input type="checkbox"> 0 </label> 
				<label class="btn btn-default"><input type="checkbox"> 1 </label> 
				<label class="btn btn-default"><input type="checkbox"> 2 </label> 
				<label class="btn btn-default"><input type="checkbox"> 3 </label> 
				<label class="btn btn-default"><input type="checkbox"> 4 </label> 
				<label class="btn btn-default"><input type="checkbox"> 5 </label> 
				<label class="btn btn-default"><input type="checkbox"> 6 </label> 
				<label class="btn btn-default"><input type="checkbox"> 7 </label> 
				<label class="btn btn-default"><input type="checkbox"> 8 </label>
				</div>
				
				<span class="label label-default">Survive</span>
				<div id="settings-survive" class="btn-group btn-group-xs" data-toggle="buttons">
				<label class="btn btn-default"><input type="checkbox"> 0 </label> 
				<label class="btn btn-default"><input type="checkbox"> 1 </label> 
				<label class="btn btn-default"><input type="checkbox"> 2 </label> 
				<label class="btn btn-default"><input type="checkbox"> 3 </label> 
				<label class="btn btn-default"><input type="checkbox"> 4 </label> 
				<label class="btn btn-default"><input type="checkbox"> 5 </label> 
				<label class="btn btn-default"><input type="checkbox"> 6 </label> 
				<label class="btn btn-default"><input type="checkbox"> 7 </label> 
				<label class="btn btn-default"><input type="checkbox"> 8 </label>
				</div>

			</div>

			<select id="pattern" class="form-control form-control-xs "> </select>

		
		
	</div>
</div>
<canvas id="gol" > </canvas>


</body>
</html>
