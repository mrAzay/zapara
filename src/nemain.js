var menu = ['fartuki1', 'fartuki1', 'fartuki1']
var fartuki = new Swiper ('.fartuki-slider-container', {
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
	
	
let sliderItems = document.querySelectorAll('.popup__slide');
let sliderItemsMini = document.querySelectorAll('.popup__slide-prev');
let arrowLeft = document.querySelector('.popup__slider-left');
let arrowRight = document.querySelector('.popup__slider-right');
let indexSlide = 0;

document.querySelectorAll('.open-modal').forEach(item => {

	item.addEventListener('click', ()=>{
		document.querySelector('body').style.overflow = 'hidden'

		document.querySelector('.popup').classList.add('active')
	})
})

document.querySelector('.popup-back').addEventListener('click', ()=>{
	document.querySelector('body').style.overflow = 'auto'

	document.querySelector('.popup').classList.remove('active')
})

arrowRight.addEventListener('click', () => {
	indexSlide < sliderItems.length - 1 ? indexSlide++ : ''
	sliderItems.forEach(item => {
		item.classList.remove('active')
		item.getAttribute('data-in') == indexSlide ? item.classList.add('active') : ''

	})
})

arrowLeft.addEventListener('click', () => {
	indexSlide > 0 ? indexSlide-- : ''
	sliderItems.forEach(item => {
		item.classList.remove('active')
		item.getAttribute('data-in') == indexSlide ? item.classList.add('active') : ''

	})
})
sliderItemsMini.forEach(item=>{
	item.addEventListener('click', () => {
		sliderItemsMini.forEach(item=>{
			item.classList.remove('active')

		})
		indexSlide = item.getAttribute('data-in')
		item.getAttribute('data-in') == indexSlide ? item.classList.add('active') : ''
		sliderItems.forEach(item => {
			item.classList.remove('active')
			item.getAttribute('data-in') == indexSlide ? item.classList.add('active') : ''
		})
	})
	
})