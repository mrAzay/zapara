import Swiper from 'swiper/bundle';


new Swiper('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
})

let centered
 if(window.innerWidth < 721){
	console.log('work2')
	centered = [55.771064, 37.588629];
}else if (window.innerWidth < 1200){
	console.log('work')
	centered = [55.771064, 37.578684];
}  else {
	centered = [55.771064, 37.570684];
}

let myMap;
ymaps.ready(init);
function init () {
	myMap = new ymaps.Map('map', {
		center: centered,
		zoom: 14.5
	})
	var myPlacemark = new ymaps.Placemark([55.771064, 37.588629], null,{
		preset: 'islands#blueMoneyIcon'
	});
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
};
