$(function(){
	function left(){
		$('.lu a').eq(0).fadeIn()
		$('.lu a').eq(1).fadeOut()
	}
	var timer=setInterval(left,4000)
	function right(){
		$('.lu a').eq(1).fadeIn()
		$('.lu a').eq(0).fadeOut()
	}
	var time=setInterval(right,8000)
	$('.left').click(function(){
		left()
	})
	$('.right').click(function(){
		right()
	})
	
	//把酒言欢新服开启
	var now=0
	$('.word a').mouseover(function(){
		clearInterval(tim)
		now=$(this).index()-1
		move()
		tim=setInterval(move,2000)
	})
	function move(){
		now++
		if(now==$('.word a').length){
			now=0
		}
		$('.word a').removeClass('bgr')
		$('.word a').eq(now).addClass('bgr')
		$('.hualun ul li').eq(now).fadeIn().siblings().fadeOut()
	}
	var tim=setInterval(move,2000)
	
	
	$('.slider .item').eq(0).show().siblings().hide()
	$('.newnav a').mouseover(function(){
		$('.newnav a').removeClass('zuxi')
		$(this).addClass('zuxi')
		$('.slider .item').eq($(this).index()).show().siblings().hide()
	})
	
	$('.tuico ul').eq(0).show().siblings().hide()
	$('.tuinav a').mouseover(function(){
		$('.tuinav a i').removeClass('em')
		$(this).find('i').addClass('em')
		$('.tuico ul').eq($(this).index()).show().siblings().hide()
	})
	
	
	$('.six a').click(function(){
		$('.six a').removeClass('bg')
		$(this).addClass('bg')
		
	})
	
	
})