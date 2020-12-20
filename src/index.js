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

