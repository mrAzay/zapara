import Swiper from 'swiper/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'fslightbox'


AOS.init();



if(document.querySelector('.popup-back')){
	document.querySelector('.popup-back').addEventListener('click', () => {
		document.querySelector('body').style.overflow = 'auto'
	
		document.querySelector('.popup').classList.remove('active')
	})
	
}




new Swiper('.preview__slider', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	autoplay: {
		delay: 5000,
	}
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
function closeModal() {
	document.querySelector('.header__menu').classList.remove('active')
	document.querySelector('body').style.overflow = 'auto'
}


function openModal() {
	document.querySelector('.header__menu').classList.add('active')
	document.querySelector('body').style.overflow = 'hidden'
}

document.querySelector('.header__menu-btn').addEventListener('click', () => {
	closeModal()
})

document.querySelectorAll('.header__menu-link').forEach(item => {
	item.addEventListener('click', () => {
		closeModal()
	})
})


document.querySelector('.header__burger').addEventListener('click', () => {
	openModal()
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


// accordion spiszheno

let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');
let title = accordion.querySelectorAll('.accordion__title');

function toggleAccordion() {
	let thisItem = this.parentNode;

	items.forEach(item => {
		if (thisItem == item) {
			// if this item is equal to the clicked item, open it.
			thisItem.classList.toggle('active');
			return;
		}
		// otherwise, remove the open class
		item.classList.remove('active');
	});
}

title.forEach(question => question.addEventListener('click', toggleAccordion));


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
	const old_Map = ymaps.Map;

	ymaps.Map = function () {
		var args = Array.prototype.slice.call(arguments);

		args.unshift(0);

		var obj = new (Function.prototype.bind.apply(old_Map, args));

		document.getElementById(args[1]).yaMap = obj;
		return obj;
	}
});


ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: centered,
		zoom: 15
	}, {
		searchControlProvider: 'yandex#search'
	}),

		// Creating a content layout.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark([55.771064, 37.588660], {
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
			iconImageSize: [80, 82],
			/**
			 * The offset of the upper left corner of the icon relative
			 * to its "tail" (the anchor point).
			 */
			iconImageOffset: [-32, -75]
		})
	myMap.geoObjects
		.add(myPlacemark);
});



ymaps.ready(function () {
	var map = document.getElementById('map').yaMap;



	window.addEventListener('resize', () => {

		if (window.innerWidth < 721) {

			map.setCenter([55.771064, 37.588660])
		} else if (window.innerWidth < 1200) {

			map.setCenter([55.771064, 37.578684])
		} else {
			map.setCenter([55.771064, 37.570684])
		}
	})
});


var menu = ['fartuki1', 'fartuki1', 'fartuki1']
var fartuki = new Swiper('.fartuki-slider-container', {
		pagination: {
				el: '.fartuki-slider-pagination',
				clickable: true,
				renderBullet: function (index, className) {
						return `<img src="/${menu[index]}.8fefa7b1.jpg" class="fartuki-slider-pagination-item ${className}">`;
				},
		},

		// Navigation arrows
		navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
		},
})
