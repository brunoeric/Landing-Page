/* Menu Toggle */

const nav = document.querySelector(
	'#header nav');

const toggle = document.querySelectorAll(
	'nav .toggle');

for (const element of toggle) {
	element.addEventListener(
		'click', function () {
			nav.classList.toggle('show');
		})
}

const links = document.querySelectorAll(
	'nav ul li a');

for(const link of links) {
	link.addEventListener(
		'click', function () {
			nav.classList.remove('show');
		})
}




/* Swiper.js */

	/* Home slideshow */

	const swiperHome = new Swiper('#home .swiper-container', {
		allowTouchMove: false,
		mousewheel: false,
		keyboard: true,

		pagination: {
			el: '#home .swiper-pagination',
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 1
		},

		effect: 'fade',
		speed: 1500,
		loop: true,

		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		}
	});

 	/* Products Carousel Slider */
	
	 const swiperProducts = new Swiper('#products .swiper-container', {
		allowTouchMove: true,
		mousewheel: false,
		keyboard: true,
		grabCursor: true,

		initialSlide: 1,

		effect: 'cards',
		cardsEffect: {
			perSlideOffset: 95,
			slideShadows: false,
			perSlideRotate: 2
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});

	/* Testimonials Carousel Slider */

	const swiperTestimonials = new Swiper('#testimonials .swiper-container', {
		mousewheel: false,
		keyboard: true,
		// grabCursor: true,

		rewind: true,
		slidesPerView: 1,

		centeredSlides: true,
		centeredSlidesBounds: true,

		pagination: {
			el: '#testimonials .swiper-pagination',
			// type: 'fraction',
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 1
		},

		// autoplay: {
		// 	delay: 10000,
		// 	disableOnInteraction: false,
		// 	pauseOnMouseEnter: true,
		// },

		breakpoints: {
			767: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				setWrapperSize: true,
				loopFillGroupWithBlank: true,
				grabCursor: true
			}
		}
	});





/* On Scroll */

window.addEventListener('scroll', function () {
	changeHeaderWhenScrolling();
	activateMenuAtCurrentSection()
});

	/* header shadow toggle*/

	const header = document.querySelector(
		'#header');
	const headerHeight = header.offsetHeight;

	function changeHeaderWhenScrolling() {
		
		if (this.window.scrollY >= headerHeight) {
			header.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
		}
	}

	/* active nav button depending of the current site section on scroll */

	const sections = document.querySelectorAll(
		'main section[id]');

	function activateMenuAtCurrentSection() {

		const activeSessionObserverPosition = window.pageYOffset + (window.innerHeight / 8) * 4;

		for (const section of sections) {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const sectionId =  section.getAttribute("id");

			const isAfterTop = 
			activeSessionObserverPosition >= 
			sectionTop;

			const isBeforeBottom = 
			activeSessionObserverPosition <= 
			sectionTop + sectionHeight;

			if (isAfterTop && isBeforeBottom) {
				document
					.querySelector(`nav ul li a[href*="${sectionId}"]`)
					.classList.add('active');
					
			} else {
					document
					.querySelector(`nav ul li a[href*="${sectionId}"]`)
					.classList.remove('active');
			}

		}

	}

	/* show site sections with delay when scrolling - from ScrollReveal */

	const scrollReveal = ScrollReveal({
		origin: 'top',
		distance: '30px',
		duration: 700,
		reset:true
	});

	scrollReveal.reveal(
		`
		#home .image, #home .text,
		#about .image, #about .text,
		#products header, #products .swiper,
		#testimonials header, #testimonials .testimonials,
		#contact .text, #contact .links,
		footer .brand, footer .social
		`,
		{ interval: 150 }
	);
