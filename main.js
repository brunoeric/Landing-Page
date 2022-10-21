/* menu toggle */

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

/* Testimonials Carousel Slider from - Swiper */

const swiper = new Swiper('.swiper-container', {
	mousewheel: false,
	keyboard: true,

	loop: true,
	slidesPerView: 1,

	pagination: {
    el: '.swiper-pagination',
    // type: 'fraction',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 2
  },

	autoplay: {
		delay: 8000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},

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
	#products header, #products .card,
	#testimonials header, #testimonials .testimonials,
	#contact .text, #contact .links,
	footer .brand, footer .social
	`,
	{ interval: 150}
);
