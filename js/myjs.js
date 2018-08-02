$(function(){
	var flag = true;
    $('#fullpage').fullpage({
    	//是否显示项目导航
    	navigation: true,
    	// 滚动速度
    	scrollingSpeed: 1200,
    	// 回调函数
    	afterLoad: function (anchorlink, index) {
    		//第二屏
    		
    		if(index == 2 && flag == true) {
    			$('.search').show().animate({"right": 370}, 1500, function () {
    				$('.search-img').animate({'opacity': 1}, 500, function () {
    					$('.search').hide();
    					$('.search-img2').show().animate({'height': 30, 'right': 250, 'bottom': 452}, 1000)
    					$('.box-img3').show().animate({"height": 218}, 1000)
    					$('.se1-img2').animate({'opacity': 1}, 1000)
    					flag = false;
    				})
    			})
    		}
    		//第三屏
    		if (index == 3) {
    			$('.select-img1-a').animate({'opacity': 1},1000);
    			$('.select-img2-a').animate({'opacity': 1},1000);
    		}
    		if(index ==4) {
    			$('.box3-sofa2').hide();
    			
    		}
    		//第五屏
    		if (index == 5) {
    			$('.yhk2').animate({'bottom': '60%'}, 1000);
    			$('.hand').animate({'bottom': 0}, 1000, function () {
    				$('.sb2').show();
    			})
    		}
    		// 第七屏
    		if (index == 7) {
    			$('.star').animate({'width': 120}, 800, function () {
    				$('.star img').show();
    			})
    		}
    		// 第八屏
    		if (index == 8) {
    			$(document).mousemove(function (e) {
    				var x = e.pageX - $('.box8-hand').width() + 80;
    				var y = e.pageY + 5;
    				var minY =  $(window).height() - 449;
    				if (y < minY){
    					y = minY;
    				}
    				$('.box8-hand').css({'left':x, 'top': y});
    			})
    		}
    	},
    	onLeave: function (index, nextIndex, direction) {
    		// 第二屏
    		if (index == 2 && nextIndex == 3) {
    			var a = $(window).height() - 250;
    			$('.box-sofa').show().animate({'width': 207, 'height': 166, 'bottom': -a, 'left': 260}, 1000, function () {
    				$('.box3-sofa').show();
    				$('.box-sofa').hide();
    			});
    			$('.box-blank').show();
    		}
    		// 第三屏
    		if (index == 3 && nextIndex == 4) {
    			var b = $(window).height() -245;
    			$('.box3-sofa').hide();
    			$('.box4-sofa').show().animate({'bottom': 205, 'left': 405,}, 1000, function () {
    				$('.box4-sofa').hide();
    				$('.box4-sofa2').show();
    				$('.box4-car-sofa').animate({'left': 1800}, 1000, function () {
    					$('.box4-t1').animate({'opacity': 1}, 500, function () {
    						$('.box4-t1-txt').animate({'opacity': 1}, 500)
    					})
    				});

    			});
    		}

    		//第五屏
    		if (index == 4 && nextIndex == 5) {
    			$('.box5-sofa').animate({'bottom': '18%'}, 1000);
    		}

    		// 第六屏
    		if (index == 5 && nextIndex == 6) {
    			$('.box5-sofa').hide();
    			$('.box6-box').animate({'left': '33%'}, 700)
    			$('.box6-sofa').show();
    			$('.box6-sofa').animate({'bottom': '70%', 'width': 70, 'left': '35%'}, 1000, function () {
    				$(this).hide();
    				$('.box6-box').animate({'bottom': 20}, 1000, function () {
    					$('.section6').animate({'backgroundPositionX': '100%'}, 2000, function () {
    						$('.box6-txt').animate({'opacity': 1}, 1000)
    						$('.man').animate({'height': 305, 'bottom': 115}, 1000, function () {
    							$(this).animate({'right': 500}, 800, function () {
    								$('.door').animate({'opacity': 1}, 1000)
    								$('.women').animate({'right': 380, 'height': 294, 'z-index': 6, 'opacity': 1}, 1000)
    							})
    						})
    					});
    				});
    				
    			})
    		}
    	}
    });
});