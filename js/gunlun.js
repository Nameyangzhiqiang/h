function getScrollTop(){
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  
	return scrollTop;  
}
window.onload=function(){
	var H_bottom=document.getElementById("H_bottom");
	window.onscroll=function(){
		if(getScrollTop()>10){
			H_bottom.style.position="fixed";
		}
		else{
			H_bottom.style.position="relative";
		}
	}
}
window.onload=function(){
	var di=document.getElementById("di");
	window.onscroll=function(){
		if(getScrollTop()>100){
			di.style.display="block";
			
		}
		else{
			di.style.display="none";
			
		}
	}
	var popWindowObj=document.getElementById("popWindow");
				var aObj=document.getElementById("aObj");
				var close=document.getElementById("close");
				aObj.onclick=function(){
					popWindowObj.style.display="block";
				}
				close.onclick=function(){
					popWindowObj.style.display="none";
				}
}

        $( function () {
            var speed = 1000;//自定义滚动速度
            //回到顶部
            $( "#di").click( function () {
                $( "html,body").animate({ "scrollTop" : 0 }, speed);
                });
            $( "#hu").click( function () {
                $( "html,body").animate({ "scrollTop" : 0 }, speed);
                });
            //回到底部
//          var windowHeight = parseInt($("body").css("height" ));//整个页面的高度
//          $( "#toBottom").click(function () {
//              $( "html,body").animate({ "scrollTop" : windowHeight }, speed);
//          });
        });
  
//			window.onload=function(){
//				
//			}
//		
		