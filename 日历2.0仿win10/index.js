/**********添加数字时钟&&添加年月日***********/
//获取元素
var numTime = document.querySelector('.num-time');//数字时钟
var dateTime = document.querySelector('.date-time');//文本日历
getNumTime();//无延迟一次使用
getNumTimes();//定时器1s执行一次



function getNumTimes() { //获取当前时间
	setInterval(getNumTime, 1000);
};

function getNumTime() {
	var date = new Date();
	numTime.innerHTML = toTwo(date.getHours()) + ':' + toTwo(date.getMinutes()) + ':' + toTwo(date.getSeconds());
	dateTime.innerHTML = date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+'&nbsp;&nbsp;&nbsp;'
}

function toTwo(num) { //将小于10的数字变成0+数字
	return num <= 9 ? '0' + num : '' + num;
}

/*********************end***************************/

/***********************添加日历*******************************/
//获取元素
var days = document.querySelector('.day');//日历的容器
var month = document.querySelector('.left-time')
console.log(days)
setDay('');
function setDay(nownum){
	var date = new Date();
	date.setMonth(date.getMonth()+1+nownum);
	date.setDate(0);
	var num = date.getDate();
	date.setDate(1);
	var nullNum = date.getDay()-1;
	days.innerHTML = ''
	month.innerHTML = date.getFullYear()+'年'+(date.getMonth()+1)+'月'
	for (var i = 0; i < nullNum; i++) {
		days.innerHTML += '<span></span>'
	}
	for (var i = 0; i < num; i++) {
		days.innerHTML += '<span>'+(i+1)+'</span>'
	}
}

/***********************添加end*******************************/


/*************************翻页start********************************/
//获取元素
var topMonth = document.querySelector('.top-btn');
var bottomMonth = document.querySelector('.bottom-btn');
var nowMonth = 0;
//添加事件
topMonth.onclick = function(){
	nowMonth--;
	setDay(nowMonth);
}
bottomMonth.onclick = function(){
	nowMonth++;
	setDay(nowMonth);
}



/*************************翻页end********************************/