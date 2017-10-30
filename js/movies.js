//整个页面swiper
//导航
var oNav = document.querySelector('.nav');
var Li = document.querySelectorAll('.nav .center li');
var A = document.querySelectorAll('.nav .center li a');
var page7 =document.querySelector('.page7');
var swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	slidesPerView: 1,
	mousewheelControl: true,
	onSlideChangeEnd: function(swiper) {
		var j = swiper.activeIndex;
		for(var i=0;i<7;i++){
			Li[i].className = '';
			A[i].className='';
		}
		Li[j].className = 'on';
		A[j].className = 'active';
		Li[j].className = 'on';
	},
});

//导航
//var swiper = new Swiper('.swiper-container-nav', {
//	pagination: '.swiper-pagination',
//	paginationClickable: true,
//	paginationBulletRender: function (swiper, index, className) {
//	    return '<span class="' + className + '">' + (index + 1) + '</span>';
//	}
//}); 
//第一页轮播
var mySwiper = new Swiper('.swiper-container1', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	paginationClickable :true,
	autoplay: 5000,
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 

});
 $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })  

//第二页轮播
var swiper = new Swiper('.swiper-container2', {
	loop: true,
	slidesPerView: 'auto',
	loopedSlides: 12,
	spaceBetween: 20,
	freeMode: true,
	autoplay: 3000,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
});
//第三页轮播
var swiper = new Swiper('.swiper-container3', {
	slidesPerView: 'auto',
	slidesPerColumn: 3,
	autoplay: 3000,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
});
//第四页轮播
var swiper = new Swiper('.swiper-container4', {
	loop: true,
	slidesPerView: 'auto',
	loopedSlides: 6,
	//				spaceBetween: 10,
	freeMode: true,
	autoplay: 3000,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
});
//第六页轮播
var swiper = new Swiper('.swiper-container6', {
	slidesPerView: 'auto',
	loopedSlides: 10,
	loop: true,
	slidesPerColumn: 1,
	autoplay: 3000,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
});


new WOW().init();

//导航
console.log(Li)
for(var i = 0; i <Li.length ; i ++){
	Li[i].index = i;
	Li[i].onclick = function(){
		for(var i = 0; i <Li.length ; i ++){
			Li[i].className = '';
			A[i].className = '';
		}
		Li[this.index].className = 'on';
		A[this.index].className = 'active';
	}
	Li[i].onmouseover = function(){
		for(var i = 0; i <Li.length ; i ++){
			Li[i].className = '';
		}
		Li[this.index].className = 'on';
	}
}
//点击导航右侧正方形，左侧导航显示
var square = document.querySelector('.square');
var minSquare = square.getElementsByTagName('li');
var hidden_nav = document.querySelector('.hidden_nav');
var on = true;
//console.log(minSquare)

//for(var i = 0; i < 4 ; i ++){
	square.onclick = function(){
		if(on){
			hidden_nav.style.left = 0;
		}else{
			hidden_nav.style.left = '-240px';
		}
		on = !on;
	}
//}

//左侧隐藏导航
var nav1 = document.querySelectorAll('.hidden_nav .nav_text .nav1');
//var nav2 = document.querySelector()
for(var i = 0 ; i < nav1.length ; i ++){
	nav1[i].index = i;
	nav1[i].onmouseover = function(){
		for(var i = 0 ; i < nav1.length ; i ++){
			nav1[i].className = 'nav1';
		}
		nav1[this.index].className = 'nav1 active';
	}
	nav1[i].onmouseleave = function(){
		nav1[this.index].className = 'nav1';
		nav1[0].className = 'nav1 active';
	}
}
//第一页文字轮播
var Text = document.querySelector('.page1 .text_slide ul');
var oText = Text.querySelectorAll('li');
var a = 0;
function textslide(){
	a++;
	if(a>=oText.length){
		Text.style.transition = 'none';
		Text.style.top = 0;
		a = 0;
	}else{
		Text.style.transition = 'all .5s';
		Text.style.top = (-32*(a)) + 'px';
	}
}
setInterval(textslide,3000);
//滚轮滚动导航条的缩放
var navbar = document.querySelector('.nav');
var swiperSlider = document.querySelector('.swiper-slide.page1');
var navA = document.querySelectorAll('.nav .center li a');
var navL = navbar.querySelector('.fl');
var navC = navbar.querySelector('.center');
var navR = navbar.querySelector('.fr');
console.log(navL,navR,navC)
window.onmousewheel = function(){
	var w = w || window;
	if(swiperSlider.className == 'swiper-slide page1 swiper-slide-active'){
		navbar.style.height = '90px';
		navbar.style.background = 'rgba(0,0,0,0)';
		navL.style.transform = 'Scale(1)';
		navC.style.transform = 'Scale(1)';
		navR.style.transform = 'Scale(1)';
		navL.style.top = 0;
		navC.style.top = 0;
		navR.style.marginTop = 0;
	}else{
		navbar.style.height = '70px';
		navbar.style.background = 'rgba(0,0,0,0.5)';
		navL.style.transform = 'Scale(0.8)';
		navC.style.transform = 'Scale(0.8)';
		navR.style.transform = 'Scale(0.8)';
		navL.style.top = '-8px';
		navC.style.top = '-9px';
		navR.style.marginTop = '-9px';
//		for(var i = 0; i < navA.length ; i ++){
//			Li[i].style.padding = '20px 15px';
//			navA[i].style.fontSize = '16px';
//		}
	}
	console.log(document.documentElement.clientHeight)
	
	
	
}
