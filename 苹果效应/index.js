window.onload=function(){
	/*******************************面向过程******************************/
	//获取要操作的元素
//	var box=document.getElementById('box');
//	var imgs=box.getElementsByTagName('img');
//	//添加移动时间
//	document.onmousemove=function(ev){
//		var ev=ev||event;
//		// 遍历img
//		for(var i=0;i<imgs.length;i++){
//			//获取每一张图片的中心点
//			var x=imgs[i].offsetLeft+imgs[i].offsetWidth/2;
//			var y=imgs[i].offsetTop+imgs[i].offsetHeight/2+box.offsetTop;
//			
//			var a=ev.clientX-x;//获取a边的值
//			var b=ev.clientY-y;// 获取b边的值
//			var c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));// 先a,b边的平方值，然后开方
//			var s=1-c/300;//统一除以300,1-除的数，使离得越近值越大，离得越远值越小
//			if(s<0.5){//边界处理，小到图片一半即等于图片的一半
//				s=0.5;
//			}
//// 			图片宽高变化值
//			imgs[i].style.width=s*120+'px';
//			imgs[i].style.height=s*120+'px';
//		}
//	}
	/*******************************面向对象******************************/
	
//	function Apple(id){
//		console.log(1)
//		// 获取要操作的元素
//		this.box=document.getElementById(id);
//		this.imgs=this.box.getElementsByTagName('img');
//	}
//	Apple.prototype.init=function(){
//		var _this=this;
//		// 鼠标移动事件
//		document.onmousemove=function(ev){
//			//调用move方法
//			_this.move(ev);
//		}
//	}
//	Apple.prototype.move=function(ev){
//		var ev=ev||event;
//		// 遍历img
//		for(var i=0;i<this.imgs.length;i++){
//			//获取每一张图片的中心点
//			var x=this.imgs[i].offsetLeft+this.imgs[i].offsetWidth/2;
//			var y=this.imgs[i].offsetTop+this.imgs[i].offsetHeight/2+this.box.offsetTop;
//			
//			var a=ev.clientX-x;//获取a边的值
//			var b=ev.clientY-y;// 获取b边的值
//			var c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));// 先a,b边的平方值，然后开方
//			var s=1-c/300;//统一除以300,1-除的数，使离得越近值越大，离得越远值越小
//			if(s<0.5){//边界处理，小到图片一半即等于图片的一半
//				s=0.5;
//			}
////			图片宽高变化值
//			this.imgs[i].style.width=s*120+'px';
//			this.imgs[i].style.height=s*120+'px';
//		}
//	};
//		var ss = new Apple('box');
//		ss.init();

	
	/*******************************ES6版面向对象******************************/
	
	
	
	
	
	
	
	
	
	
	
};
