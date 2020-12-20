import Swiper from 'swiper/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


new Swiper('.preview__slider', {
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
		},
		// when window width is >= 640px
		1000: {
			slidesPerView: 5,
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




ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
					center: [55.751574, 37.573856],
					zoom: 9
			}, {
					searchControlProvider: 'yandex#search'
			}),

			// Creating a content layout.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'A custom placemark icon',
					balloonContent: 'This is a pretty placemark'
			}, {
					/**
					 * Options.
					 * You must specify this type of layout.
					 */
					iconLayout: 'default#image',
					// Custom image for the placemark icon.
					iconImageHref: 'map.svg',
					// The size of the placemark.
					iconImageSize: [30, 42],
					/**
					 * The offset of the upper left corner of the icon relative
					 * to its "tail" (the anchor point).
					 */
					iconImageOffset: [-5, -38]
			}),

			myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
					hintContent: 'A custom placemark icon with contents',
					balloonContent: 'This one — for Christmas',
					iconContent: '12'
			}, {
					/**
					 * Options.
					 * You must specify this type of layout.
					 */
					iconLayout: 'default#imageWithContent',
					// Custom image for the placemark icon.
					iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png',
					// The size of the placemark.
					iconImageSize: [48, 48],
					/**
					 * The offset of the upper left corner of the icon relative
					 * to its "tail" (the anchor point).
					 */
					iconImageOffset: [-24, -24],
					// Offset of the layer with content relative to the layer with the image.
					iconContentOffset: [15, 15],
					// Content layout.
					iconContentLayout: MyIconContentLayout
			});

	myMap.geoObjects
			.add(myPlacemark)
			.add(myPlacemarkWithContent);
});
