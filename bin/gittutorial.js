(function (Main, undefined){
	console.log('this is my app js');
}(window.Main == window.Main || {}));

(function (Controller, undefined) {
	console.log('this is my controller');
	var a = "Controller Name";
}(Main.Controller == Main.Controller || {}));