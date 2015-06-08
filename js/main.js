
/**
 * 负责新建iframe载入指定的url
 */
var Loader = function(url,options){
	this.options = options;
	var frame = $("<iframe/>",{
		"src":url,
		"sandbox":"allow-same-origin allow-forms allow-scripts"
	});
	this.frame = frame.get(0);
	this.container = this.options.container||'body';
	$(this.container).append(this.frame);
	$(this.frame).load(this.onload.bind(this));
};

Loader.prototype = {
	"onload":function(){
		console.log(this.frame);

		var child = this.frame.contentWindow;

		// $(child.document.body).append($("<script/>",{
		// 	"src":window.location.host+'/bower_components/jquery/dist/jquery.js'
		// }));
		// $(child.document.body).append($("<script/>",{
		// 	"src":window.location.host+''
		// }));
		$(child.document.body).find('.offer-list-row .price').each(function(){
			var title = $(this).parents('li').find('.title a').text();
			var price = $(this).find('em').text();
			console.log(title,price);
		});
		this.options.onload();
	},
	"do":function(func){

	},
	"destroy":function(){
		$(this.frame).empty();
	}
};

/**
 *
 */
 