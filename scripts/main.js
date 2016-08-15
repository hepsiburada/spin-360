(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function ($) {

	$.spin360 = function (options) {
		var self = this;

		self.opt = {
			id: '360Image',
			imgClass: 'spin-image',
			datas: [
				"images/Tv/product01.jpg",
				"images/Tv/product02.jpg",
				"images/Tv/product03.jpg",
				"images/Tv/product04.jpg",
				"images/Tv/product05.jpg",
				"images/Tv/product06.jpg",
				"images/Tv/product07.jpg",
				"images/Tv/product08.jpg",
				"images/Tv/product09.jpg",
				"images/Tv/product10.jpg",
				"images/Tv/product11.jpg",
				"images/Tv/product12.jpg",
				"images/Tv/product13.jpg",
				"images/Tv/product14.jpg",
				"images/Tv/product15.jpg",
				"images/Tv/product16.jpg",
				"images/Tv/product17.jpg",
				"images/Tv/product18.jpg",
				"images/Tv/product19.jpg",
				"images/Tv/product20.jpg",
				"images/Tv/product21.jpg",
				"images/Tv/product22.jpg",
				"images/Tv/product23.jpg",
				"images/Tv/product24.jpg",
				"images/Tv/product25.jpg",
				"images/Tv/product26.jpg",
				"images/Tv/product27.jpg",
				"images/Tv/product28.jpg",
				"images/Tv/product29.jpg",
				"images/Tv/product30.jpg",
				"images/Tv/product31.jpg",
				"images/Tv/product32.jpg",
				"images/Tv/product33.jpg",
				"images/Tv/product34.jpg",
				"images/Tv/product35.jpg",
				"images/Tv/product36.jpg"
			],
			width: 500,
			height: 500
		};

		self.options = Object.assign(self.opt, options);
		self.activeIndex = 0;

		self.createTemplate = function () {
			var opt = self.options;
			var $element = $('#' + opt.id);

			$element.addClass('spin loader');
			$element.css({
				'width': opt.width + 'px',
				'height': opt.height + 'px'
			});

			self.run($element, opt);
		};

		self.run = function ($element, opt) {
			var datas = opt.datas;
			self.appendImages($element, datas);
			self.createEvents($element, datas);
		};

		self.appendImages = function ($element, datas) {
			$element.css({'background-image':'url("'+ datas[self.activeIndex] +'")'});
		};

		self.createEvents = function ($element, datas) {
	    $element.mousedown(function(e){
	    	var p0 = { x: e.pageX, y: e.pageY };
		    $(this).on("mousemove",function (e) {
		        var p1 = { x: e.pageX, y: e.pageY };

		        if (p0.x - p1.x > 10) {
		        	self.activeIndex++;
		        	self.activeIndex = self.activeIndex >= datas.length ? 0 : self.activeIndex;
		        	self.appendImages($element, datas);
		        	p0 = p1;
		        } else if (p0.x - p1.x <= -10) {
		        	self.activeIndex--;
		        	self.activeIndex = self.activeIndex < 0 ? datas.length - 1 : self.activeIndex;
		        	self.appendImages($element, datas);
		        	p0 = p1;
		        }
		    });
			}).mouseup(function (){
			   $(this).off("mousemove");
			}).mouseleave(function (){
			   $(this).off("mousemove");
			});
		};

		self.createTemplate();
	};

}));