	var homepageBanner = new Swiper('.home-banner-containerjs', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: false,
		touchRatio: 0,
		speed: 600,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			init: function() {
				$('.swiper-slide').find('video').each(function() {
					this.play();
				});
			}
		}
	});
	homepageBanner.on('slideChangeTransitionEnd', function() {
		if (homepageBanner.realIndex == 0) {
			$('.swiper-slide').find('video').each(function() {
				this.pause();
				this.play();
			});
		} else {
			$('.swiper-slide').find('video').each(function() {
				this.pause();
				this.currentTime = 0;
			});
		}
	});


    var swiper = new Swiper('#our-offline .swiper-container', {
      slidesPerView: 1,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: false,
      breakpoints: {
            320: {
                slidesPerView: 1,
				spaceBetween: 0,
            },
            576: {
                slidesPerView: 1,
				spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
				spaceBetween: 0,
            },
            991: {
                slidesPerView: 1,
				spaceBetween: 0,
            },
        }
    });

    var swiper = new Swiper('#awards-recognition .swiper-container', {
      slidesPerView: 3,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: false,
      breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 5,
            },
        }
    });