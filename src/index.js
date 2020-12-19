import Swiper from 'swiper/bundle';


new Swiper('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
})


let rotateValue = 0;
let previewBg = document.querySelector('.preview__bg');

setInterval(()=>{
	rotateValue = rotateValue + 1
	previewBg.style.transform = `rotate(${rotateValue}deg)`
}, 100)