(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function ($) {

	function spin (options) {
		var self = this;

		var defaultOp = {
			id: '360Image',
			imgClass: 'spin-image',
			width: 500,
			height: 500,
			lazyLoad: true
		};

		self.options = Object.assign(defaultOp, options);
		self.activeIndex = 0;
		self.$element = $('#' + self.options.id);
		self.create();
	};

	$.spin = spin;

	spin.prototype = {
		isDesktop: function () {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 return false;
			}

			return true;
		},
		create: function () {
			var self = this;
			var opt = this.options;

			self.$element.addClass('spin loader');
			self.$element.css({
				'width': opt.width + 'px',
				'height': opt.height + 'px',
				'cursor': '-webkit-grab'
			});

			self.run(opt);
		},
		run: function (opt) {
			var self = this;
			var datas = opt.datas;

			this.appendImages(datas);
			if (self.isDesktop()) {
				self.createEvents(datas);
			} else {
				self.createTouchEvents(datas);
			}
		},
		appendImages: function (datas) {
			var self = this,
					template = '',
					dataClass = '',
					addingClass = '';

			var src = this.options.lazyLoad ? 'data-src' : 'src';

			for (var i = 0; i < datas.length; i++) {
				dataClass = i === this.activeIndex ? '' : 'hidden';
				addingClass = i === this.activeIndex ? '' : 'display:none;';

				template += '<img style="width: 100%; height: auto; '+ addingClass +'" class="'+ this.options.imgClass +' '+ dataClass +'" '+ src +'="'+ datas[i] +'" />';
			}

			self.$element.html(template);
			this.setImages(this.activeIndex);
		},
		setImages: function (index) {
			var self = this;

			$allImages = self.$element.find('.' + this.options.imgClass);
			$allImages.not('.hidden').addClass('hidden').css('display', 'none');
			$imgElement = $allImages.eq(index);
			if (this.options.lazyLoad) {
				$imgElement.attr('src', $imgElement.data('src')).removeClass('hidden').css('display', 'block');
			} else {
				$imgElement.removeClass('hidden').css('display', 'block');
			}
		},
		createEvents: function (datas) {
			var self = this;

	    self.$element.mousedown(function(e){
	    	e.preventDefault();
	    	var p0 = { x: e.pageX, y: e.pageY };
		    $(this).on("mousemove",function (e) {
		    		self.$element.css('cursor', '-webkit-grabbing');
		        var p1 = { x: e.pageX, y: e.pageY };

		        if (p0.x - p1.x > 10) {
		        	self.activeIndex++;
		        	self.activeIndex = self.activeIndex >= datas.length ? 0 : self.activeIndex;
		        	self.setImages(self.activeIndex);
		        	p0 = p1;
		        } else if (p0.x - p1.x <= -10) {
		        	self.activeIndex--;
		        	self.activeIndex = self.activeIndex < 0 ? datas.length - 1 : self.activeIndex;
		        	self.setImages(self.activeIndex);
		        	p0 = p1;
		        }
		    });
			}).mouseup(function (){
			   $(this).off("mousemove");
			   self.$element.css('cursor', '-webkit-grab');
			}).mouseleave(function (){
			   $(this).off("mousemove");
			   self.$element.css('cursor', '-webkit-grab');
			});
		},
		createTouchEvents: function (datas) {
			var self = this;
			var p0 = { };

			self.$element.bind('touchstart', function(e) {
				e.preventDefault();
				p0 = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY };
			});

			self.$element.bind('touchmove',function(e){
	      e.preventDefault();
	      self.$element.css('cursor', '-webkit-grabbing');
        var p1 = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY };

        if (p0.x - p1.x > 10) {
        	self.activeIndex++;
        	self.activeIndex = self.activeIndex >= datas.length ? 0 : self.activeIndex;
        	self.setImages(self.activeIndex);
        	p0 = p1;
        } else if (p0.x - p1.x <= -10) {
        	self.activeIndex--;
        	self.activeIndex = self.activeIndex < 0 ? datas.length - 1 : self.activeIndex;
        	self.setImages(self.activeIndex);
        	p0 = p1;
        }
			});
		},
		destroy: function () {
				var self = this;
				
				self.$element.html('');
				self.$element.removeAttr('class');
				self.$element.replaceWith(self.$element.clone());
		}
	};

	$.spin360 = function (options) {
		var self = this;
		var spins = new spin(options, self);

		return spins;
	}
	
}));