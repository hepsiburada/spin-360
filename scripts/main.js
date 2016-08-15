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
			height: 500,
			lazyLoad: true
		};

		self.options = Object.assign(self.opt, options);
		self.activeIndex = 0;

		self.createTemplate = function () {
			var opt = self.options;
			var $element = $('#' + opt.id);

			$element.addClass('spin loader');
			$element.css({
				'width': opt.width + 'px',
				'height': opt.height + 'px',
				'cursor': '-webkit-grab'
			});

			self.run($element, opt);
		};

		self.run = function ($element, opt) {
			var datas = opt.datas;
			self.appendImages($element, datas);
			self.createEvents($element, datas);
		};

		self.appendImages = function ($element, datas) {
			var template = '';
			var dataClass = '';
			var addingClass = '';
			var src = self.options.lazyLoad ? 'data-src' : 'src';

			for (var i = 0; i < datas.length; i++) {
				dataClass = i === self.activeIndex ? '' : 'hidden';
				addingClass = i === self.activeIndex ? '' : 'display:none;';

				template += '<img style="width: 100%; height: auto; '+ addingClass +'" class="'+ self.options.imgClass +' '+ dataClass +'" '+ src +'="'+ datas[i] +'" />';
			}

			$element.html(template);
			self.setImages($element, self.activeIndex);
		};

		self.setImages = function ($element, index) {
			$allImages = $element.find('.' + self.options.imgClass);
			$allImages.not('.hidden').addClass('hidden').css('display', 'none');
			$imgElement = $allImages.eq(index);
			if (self.options.lazyLoad) {
				$imgElement.attr('src', $imgElement.data('src')).removeClass('hidden').css('display', 'block');
			} else {
				$imgElement.removeClass('hidden').css('display', 'block');
			}
		};

		self.createEvents = function ($element, datas) {
	    $element.mousedown(function(e){
	    	e.preventDefault();
	    	var p0 = { x: e.pageX, y: e.pageY };
		    $(this).on("mousemove",function (e) {
		    		$element.css('cursor', '-webkit-grabbing');
		        var p1 = { x: e.pageX, y: e.pageY };

		        if (p0.x - p1.x > 10) {
		        	self.activeIndex++;
		        	self.activeIndex = self.activeIndex >= datas.length ? 0 : self.activeIndex;
		        	self.setImages($element, self.activeIndex);
		        	p0 = p1;
		        } else if (p0.x - p1.x <= -10) {
		        	self.activeIndex--;
		        	self.activeIndex = self.activeIndex < 0 ? datas.length - 1 : self.activeIndex;
		        	self.setImages($element, self.activeIndex);
		        	p0 = p1;
		        }
		    });
			}).mouseup(function (){
			   $(this).off("mousemove");
			   $element.css('cursor', '-webkit-grab');
			}).mouseleave(function (){
			   $(this).off("mousemove");
			   $element.css('cursor', '-webkit-grab');
			});
		};

		self.createTemplate();
	};

}));