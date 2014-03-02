var _toStr = function(x){
	if ( x == undefined || x.length <=  0){return "***No Parameter***";}
	x = x + "";
	return x;
}
var _toInt = function(x){
	if (x == undefined || x.length <= 0){return "***No Parameter***";}
	x = parseInt(x);
	return x;
}
var _addStr = function(x,y){
	if(/[0-9]/.test(x) && /[0-9]/.test(y)){
		x = x+"";
		x = parseInt(x);
		y = y + "";
		y = parseInt(y);

		x = x+y;
		return x; 
	}
	else{
		return 0;
	}
}
var _clear = function(){
	document.documentElement.innerHTML = "";
}
var _windowWidth = function(){
	return document.body.clientWidth;
}
var _windowHeight = function(){
	return document.body.clientHeight;
}
var _element = function(id){
	return document.getElementById(id);
}
