var  box=document.querySelector(".box");
box.addEventListener("mousedown",down);
function down(ev){
	var boxX=ev.clientX - this.offsetLeft;
	var boxY=ev.clientY - this.offsetTop;
}
