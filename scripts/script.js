var k = 500,
	
	divRight = $('.right'),
	divLeft = $('.left'),
	pHello = $('.hello'),
	pWorld = $('.world'),
	divParentSlide = $('.parentSlide'),
	scr = $(window).scrollTop(),
	pHelloLeft,
	divRightWidth,
	divLeftWidth,
	docWidth,
	docHeight;

$(document).ready(function(){
	//Size of window
	resizeWindow();
	//Size of window event
	$(window).resize(function(){
		resizeWindow();
	});
	//Scroll event
	$(window).scroll(function(){
		slideFrame($(window).scrollTop());
	});
});
/* -=============================================-*/
function resizeWindow () {
	docWidth = $(document).width();
	docHeight = $(window).height();
	scr = $(document).scrollTop();

	divParentSlide.css(
		{
			'height':docHeight+'px',
			'width':docWidth+30 + 'px'
		});
	divRight.css(
		{
			'height':docHeight + 'px',
			'width':docWidth/2 + 'px'
		});
	divLeft.css(
		{
			'height':docHeight+'px',
			'width':docWidth /2 + 'px'
		});
	divRightWidth = divRight.width(),
	divLeftWidth = divLeft.width();
	pHelloLeft = divLeftWidth-pHello.width();

	slideFrame($(window).scrollTop());
}

/* --------------------------*/
function slideFrame(scrollTopValue){
	if(divLeft.width() >= 0){
		divLeft.css(
			'width',divLeftWidth - (k*scrollTopValue/divLeftWidth)+'px'
			);
		divRight.css(
		{
			'width':divRightWidth-(k*scrollTopValue/divRightWidth) +'px',
			'margin-left': (2*k*scrollTopValue)/divRightWidth +'px'
		});
		pHello.css(
			{
				'left':pHelloLeft - (k*scrollTopValue/divLeftWidth)+'px'
			});
		pWorld.css(
			{
				'right':pHelloLeft - 30 - (k*scrollTopValue/divLeftWidth)+'px'
			});

	};
}