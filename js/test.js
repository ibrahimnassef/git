var TEST = (function(module) {

	module.ClickIT = function(resultObject){
		resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(TEST || {}));