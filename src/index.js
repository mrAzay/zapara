import Swiper from 'swiper/bundle';


new Swiper('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
})

document.querySelector('.header__menu-btn').addEventListener('click', () => {
	document.querySelector('.header__menu').classList.remove('active')
})


document.querySelector('.header__burger').addEventListener('click', () => {
	document.querySelector('.header__menu').classList.add('active')
})
new Swiper('.clients__slider', {
	loop: false,
	slidesPerView: 5,
	navigation: {
		nextEl: '.clients-button-next',
		prevEl: '.clients-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		300: {
			slidesPerView: 2,
			spaceBetween: 50
		},
		// when window width is >= 480px
		600: {
			slidesPerView: 3,
			spaceBetween: 50
		},
		// when window width is >= 640px
		1000: {
			slidesPerView: 5,
			spaceBetween: 50
		}
	}
})

new Swiper('.review__slider', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.review-button-next',
		prevEl: '.review-button-prev',
	}
})

let centered
if (window.innerWidth < 721) {
	console.log('work2')
	centered = [55.771064, 37.588629];
} else if (window.innerWidth < 1200) {
	console.log('work')
	centered = [55.771064, 37.578684];
} else {
	centered = [55.771064, 37.570684];
}

let myMap;
ymaps.ready(init);
function init() {
	myMap = new ymaps.Map('map', {
		center: centered,
		zoom: 14.5
	})
	var myPlacemark = new ymaps.Placemark([55.771064, 37.588629],  {
		iconLayout: 'default#image',
		iconImageHref: '../src/img/map.svg',
		iconImageSize: [30, 42],
		iconImageOffset: [-5, -38],
		balloonLayout: 'default#image'
	});
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
};
