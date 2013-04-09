var lineWrap = function(lineString, lineLength) {
	var marker = 0;
	var spaceMarker = 0;
	var oldMarker = 0;
	var lines = [];
	var lineIndex=0;
	while(marker < lineString.length){
		var spaceChange = false;
		var endLine = false;
		spaceMarker=0;
		for(i = 0; i < lineLength; i++){
			if(lineString[marker + i]=== " "){
				spaceMarker = marker + i;
			}
			if(marker+i === lineString.length-1){
				endLine=true;
				spaceMarker = marker+i;
				i = lineLength;
			}
		}
		if(endLine === true){
			spaceMarker=lineString.length;
			lines[lineIndex] = lineString.substring(marker);
		}
		else{
		lines[lineIndex] = lineString.substring(marker, spaceMarker);
		}
		lineIndex++;
		oldMarker = marker;
		marker = spaceMarker + 1;
	}
	return lines;
};
window.onload = function() {
	var lineLength = 18;
	$("#accordion").accordion({header: '.accordionHead'}, { icons: { header: "ui-icon-plus", headerSelected: "ui-icon-minus" } });
	$(".accordionHead").each(function(counter){
		var headerHeight= $(this).children("h3").css("height");
		headerHeight= parseInt(headerHeight);
		var arrowTop= headerHeight/2 -4;
		$(this).css("height", headerHeight + 14);
		$(this).children(".expandArrow").css("top", arrowTop);
	});
	$("#accordion").children("div").each(function(counter){
		var expanded = $(this).children(".subContent").attr("aria-expanded");
		$(this).children("p").append(counter);
		if(expanded==="true"){
			$(this).find(".expandArrow").text("v");
		}
		else{
			$(this).find(".expandArrow").text(">");
		}
	});
/*
	$(".accordionHead, .accordionHead h3, .expandArrow, .accordionHolder").mouseenter(function(){
		$(this).css("cursor", "hand");
		
	});
	$(".accordionHead, .accordionHead h3, .expandArrow, .accordionHolder").mouseleave(function(){
		$(this).css("cursor", "hand");
	});
*/

	$(".accordionHead").click(function(){
		$("#accordion").children("div").each(function(counter){
			var expanded = $(this).children(".subContent").attr("aria-expanded");
			$(this).children("p").append(counter);
			if(expanded==="true"){
				$(this).find(".expandArrow").text("v");
			}
			else{
				$(this).find(".expandArrow").text(">");
			}
		});
	});
	$("#menu").children(".menuItem").mouseenter(function(){
		$(this).children(".menuBG").css("background-color", "white");
		$(this).children("span").css("color", "black");
		$(this).css("cursor", "hand");
	});
	$("#menu").children(".menuItem").mouseleave(function(){
		$(this).children(".menuBG").css("background-color", "#000100");
		$(this).children("span").css("color", "white");
		$(this).css("cursor", "hand");
	});
	$("#find, #findExtension").mouseenter(function(){
		$("#findExtension").show();
	});
	$("#find, #findExtension").mouseleave(function(){
		$("#findExtension").hide();
	});
	$("#findExtension").children(".menuItem").mouseenter(function(){
		$(this).children(".menuBG").css("background-color", "white");
		$(this).children("span").css("color", "black");
		$(this).css("cursor", "hand");
	});
	$("#findExtension").children(".menuItem").mouseleave(function(){
		$(this).children(".menuBG").css("background-color", "#001133");
		$(this).children("span").css("color", "#BBBBBB");
		$(this).css("cursor", "hand");
	});
/* LINEWRAP ON THE NAVIGATION MENU */
$(".menuItem").each(function(counter){
	
	var sample = $(this).children("span").html();
	if(sample.length > lineLength){
		var newLines = [];
		newLines = lineWrap(sample, lineLength);
		$(this).children("span").html(newLines[0]);
		var blockHeight = 15;
		var increment = blockHeight;
		for(i=1; i<newLines.length; i++){
			$(this).children("span").append("<br>" + newLines[i]);
			blockHeight += increment;
			$(this).children(".menuBG").css("height", blockHeight + "px");
		}
	}
	
	
});
/* Experiment end. */
/*	$(".menuItem").each(function(i){
		$(this).append("Hi!");
		
		var fullLine = $(this).html();
		if(fullLine.length > lineLength){
			newLines = lineWrap(fullLine, lineLength);
			$(this).html(newLines[0]);
			for(i=1; i < newLines.length; i++){
				$(this).append("<br>" + newLines[i]);
			} 
		}
	});
*/
	$(".accordionHead").mouseenter(function(){
		$(this).css({cursor: "pointer"});
	});
	$(".accordionHead").mouseleave(function(){
		$(this).css("cursor", "default");
	});

}
